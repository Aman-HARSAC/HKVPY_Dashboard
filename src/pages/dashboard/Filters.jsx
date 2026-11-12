import { useEffect, useMemo, useState } from "react";

const ALL_TABLES_API = "https://hsac.org.in/API_HKVPY/api_tree_survey_hkvpy/get_mst_tables";

const BOUNDARY_SERVICE =
  "https://hsacggm.in/server/rest/services/PMFBY_Survey/Boundaries/MapServer/";

const EMPTY_FILTERS = {
  district: "",
  tehsil: "",
  village: "",
  startDate: "",
  endDate: "",
  species: "",
  treeId: "",
};

const text = (value) => String(value ?? "").trim();

const uniqueSorted = (values) =>
  [...new Set(values.map(text).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
  );

const same = (a, b) => text(a).toLowerCase() === text(b).toLowerCase();

const firstDefined = (...values) =>
  values.find((value) => value !== undefined && value !== null && value !== "");

const normalize = (value) => String(value ?? "").trim().toLowerCase();

function unwrapPayload(payload) {
  let value = payload?.data ?? payload;
  if (typeof value === "string") {
    try { value = JSON.parse(value); } catch { return value; }
  }
  return value;
}

function findSpeciesTable(payload) {
  const root = unwrapPayload(payload);
  const isSpeciesTable = (item) =>
    normalize(firstDefined(item?.table_name, item?.tableName, item?.name, item?.key))
      .replace(/[^a-z0-9]/g, "") === "msttreespecies";
  const rowsFrom = (item) => firstDefined(item?.data, item?.rows, item?.result, item?.records);

  if (Array.isArray(root)) {
    const named = root.find(isSpeciesTable);
    if (named && Array.isArray(rowsFrom(named))) return rowsFrom(named);
    if (root.some((item) => firstDefined(item?.tree_species_name, item?.species_name, item?.speciesName, item?.tree_species, item?.TreeSpeciesName))) return root;
  }
  if (root && typeof root === "object") {
    const candidates = [
      root.mst_tree_species, root.MST_TREE_SPECIES, root.mstTreeSpecies,
      root.data?.mst_tree_species, root.data?.MST_TREE_SPECIES, root.data?.mstTreeSpecies,
      root.tables?.mst_tree_species, root.tables?.MST_TREE_SPECIES,
      root.result?.mst_tree_species, root.result?.MST_TREE_SPECIES,
    ];
    for (const candidate of candidates) {
      if (Array.isArray(candidate)) return candidate;
      if (candidate && typeof candidate === "object" && Array.isArray(rowsFrom(candidate))) return rowsFrom(candidate);
    }
    for (const value of Object.values(root)) {
      if (Array.isArray(value)) {
        const named = value.find(isSpeciesTable);
        if (named && Array.isArray(rowsFrom(named))) return rowsFrom(named);
      }
    }
  }
  return [];
}

function getSpeciesName(row) {
  return firstDefined(
    row?.tree_species_name, row?.species_name, row?.speciesName, row?.tree_species,
    row?.TreeSpeciesName, row?.species, row?.name, row?.tree_name, row?.TreeName
  );
}

const FIELD_CANDIDATES = {
  district: ["N_D_NAME", "district", "district_name", "dist_name", "distname", "d_name", "dtname", "name_2", "name"],
  tehsil: ["N_T_NAME", "New_block", "tehsil", "tehsil_name", "tehsilname", "subdistrict", "sub_district", "subdistrict_name", "t_name", "name_3", "name"],
  village: ["N_V_NAME", "village", "village_name", "villagename", "vill_name", "v_name", "name_4", "name"],
  districtCode: ["N_D_CODE", "dcode", "district_code", "dist_code", "dtcode", "d_code"],
  tehsilCode: ["N_T_CODE", "tehsil_code", "teh_code", "subdistrict_code", "subdtcode"],
  villageCode: ["N_V_CODE", "village_code", "vill_code"],
  districtParent: ["N_D_NAME", "district", "district_name", "dist_name", "distname", "d_name"],
  tehsilParent: ["N_T_NAME", "New_block", "tehsil", "tehsil_name", "tehsilname", "subdistrict", "sub_district", "t_name"],
};

const normalized = (value) => text(value).toLowerCase().replace(/[^a-z0-9]/g, "");

function findField(fields = [], candidates = []) {
  for (const candidate of candidates) {
    const found = fields.find((field) => normalized(field.name) === normalized(candidate));
    if (found) return found.name;
  }
  return null;
}

async function getJson(url, signal) {
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error(`Boundary service returned HTTP ${response.status}.`);
  const json = await response.json();
  if (json.error) throw new Error(json.error.message || "ArcGIS boundary query failed.");
  return json;
}

function queryUrl(layerUrl, params = {}) {
  const url = new URL(`${layerUrl.replace(/\/$/, "")}/query`);
  Object.entries({
    f: "json",
    where: "1=1",
    outFields: "*",
    returnGeometry: "false",
    ...params,
  }).forEach(([key, value]) => url.searchParams.set(key, String(value)));
  return url.toString();
}

async function fetchAllFeatures(layerUrl, signal) {
  const pageSize = 1000;
  let offset = 0;
  let all = [];
  let exceeded = true;

  while (exceeded) {
    const result = await getJson(
      queryUrl(layerUrl, {
        resultOffset: offset,
        resultRecordCount: pageSize,
        orderByFields: "OBJECTID",
      }),
      signal
    );
    const features = result.features || [];
    all = all.concat(features.map((feature) => feature.attributes || {}));
    exceeded = Boolean(result.exceededTransferLimit) || features.length === pageSize;
    offset += features.length;
    if (!features.length || offset > 200000) break;
  }

  return all;
}

async function fetchDistinctValues(layerUrl, fields, signal) {
  const result = await getJson(
    queryUrl(layerUrl, {
      outFields: fields.join(","),
      returnGeometry: "false",
      returnDistinctValues: "true",
      orderByFields: fields.join(","),
      resultRecordCount: 5000,
    }),
    signal
  );
  return (result.features || []).map((feature) => feature.attributes || {});
}

function scoreLayer(layer, kind) {
  const name = normalized(layer.name);
  const patterns = {
    district: ["district", "districtboundary", "districtboundaries", "dist"],
    tehsil: ["tehsil", "subdistrict", "block", "tehsilboundary", "blockboundary"],
    village: ["village", "villages", "villageboundary"],
  };
  return (patterns[kind] || []).reduce(
    (score, pattern) => score + (name.includes(pattern) ? pattern.length + 1 : 0),
    0
  );
}

function selectLayer(layers, kind) {
  return [...layers]
    .filter((layer) => layer.type !== "Group Layer")
    .map((layer) => ({ layer, score: scoreLayer(layer, kind) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)[0]?.layer || null;
}

function getFieldValue(row, field) {
  return field ? row[field] : undefined;
}

// Build stable dropdown options from administrative codes so repeated records
// and capitalization differences (e.g. GURUGRAM/Gurugram/gurugram) do not
// create duplicate options.
function uniqueOptions(rows, codeField, nameField) {
  const byCode = new Map();
  const byName = new Map();

  for (const row of rows || []) {
    const rawName = text(getFieldValue(row, nameField));
    if (!rawName) continue;

    const code = text(getFieldValue(row, codeField));
    const key = code ? `code:${code}` : `name:${rawName.toLowerCase()}`;
    const existing = byCode.get(key) || byName.get(rawName.toLowerCase());

    if (!existing) {
      const option = { value: rawName, code };
      byCode.set(key, option);
      byName.set(rawName.toLowerCase(), option);
    } else if (rawName.length < existing.value.length) {
      // Prefer the shorter, usually human-readable spelling over uppercase variants.
      existing.value = rawName;
    }
  }

  return [...new Map(
    [...byCode.values(), ...byName.values()].map((item) => [item.value.toLowerCase(), item])
  ).values()].sort((a, b) =>
    a.value.localeCompare(b.value, undefined, { numeric: true, sensitivity: "base" })
  );
}

function titleCaseName(value) {
  const input = text(value);
  if (!input || input !== input.toUpperCase()) return input;

  // Avoid Unicode property escapes for compatibility with older build targets.
  return input.toLowerCase().replace(/(^|[\\s-])([a-z])/g, (_, separator, letter) =>
    separator + letter.toUpperCase()
  );
}

export default function Filter({
  treeData = [],
  onApply,
  appliedValue = {},
  loading = false,
  resultCount = 0,
  onClose,
}) {
  const [draft, setDraft] = useState({ ...EMPTY_FILTERS });
  const [error, setError] = useState("");
  const [masterSpecies, setMasterSpecies] = useState([]);
  const [speciesLoading, setSpeciesLoading] = useState(true);
  const [boundaryLoading, setBoundaryLoading] = useState(true);
  const [boundaryRows, setBoundaryRows] = useState({
    districts: [],
    tehsils: [],
    villages: [],
    fields: {},
  });

  useEffect(() => {
    setDraft({
      district: appliedValue.district ?? "",
      tehsil: appliedValue.tehsil ?? "",
      village: appliedValue.village ?? "",
      startDate: appliedValue.startDate ?? "",
      endDate: appliedValue.endDate ?? "",
      species: appliedValue.species ?? "",
      treeId: appliedValue.treeId ?? "",
    });
  }, [
    appliedValue.district,
    appliedValue.tehsil,
    appliedValue.village,
    appliedValue.startDate,
    appliedValue.endDate,
    appliedValue.species,
    appliedValue.treeId,
  ]);

  // Load the complete master species list independently of the currently filtered survey records.
  useEffect(() => {
    const controller = new AbortController();
    async function loadMasterSpecies() {
      setSpeciesLoading(true);
      try {
        const response = await fetch(ALL_TABLES_API, {
          method: "GET",
          headers: { Accept: "application/json" },
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`Species API returned HTTP ${response.status}.`);
        const payload = await response.json();
        const rows = findSpeciesTable(payload);
        const names = uniqueSorted(rows.map(getSpeciesName));
        if (!names.length) throw new Error("No species were found in mst_tree_Species.");
        setMasterSpecies(names);
      } catch (err) {
        if (err.name !== "AbortError") {
          // Keep the dropdown usable if the master API is temporarily unavailable.
          setMasterSpecies((current) => current.length ? current : uniqueSorted(treeData.map((tree) => tree.tree_species)));
        }
      } finally {
        if (!controller.signal.aborted) setSpeciesLoading(false);
      }
    }
    loadMasterSpecies();
    return () => controller.abort();
  }, [treeData]);

  // Load administrative names/codes from the configured MapServer.
  // Prefer the layer containing N_D_NAME, N_T_NAME and N_V_NAME together,
  // because the service's village table stores the full administrative hierarchy.
  useEffect(() => {
    const controller = new AbortController();

    async function loadBoundaries() {
      setBoundaryLoading(true);
      setError("");
      try {
        const service = await getJson(`${BOUNDARY_SERVICE}?f=pjson`, controller.signal);
        const layers = (service.layers || []).filter((layer) => layer.type !== "Group Layer");

        const details = await Promise.all(
          layers.map(async (layer) => {
            try {
              const metadata = await getJson(
                `${BOUNDARY_SERVICE}${layer.id}?f=pjson`,
                controller.signal
              );
              return { layer, metadata };
            } catch (err) {
              if (err.name === "AbortError") throw err;
              return null;
            }
          })
        );

        const candidates = details.filter(Boolean).map(({ layer, metadata }) => {
          const fields = metadata.fields || [];
          return {
            layer,
            metadata,
            fields,
            districtName: findField(fields, ["N_D_NAME"]),
            districtCode: findField(fields, ["N_D_CODE"]),
            tehsilName: findField(fields, ["N_T_NAME"]),
            tehsilCode: findField(fields, ["N_T_CODE"]),
            villageName: findField(fields, ["N_V_NAME"]),
            villageCode: findField(fields, ["N_V_CODE"]),
          };
        });

        // Exact fields from the supplied screenshots are preferred.
        const hierarchyLayer = candidates.find(
          (item) => item.districtName && item.tehsilName && item.villageName
        );

        if (hierarchyLayer) {
          const hierarchyUrl = `${BOUNDARY_SERVICE}${hierarchyLayer.layer.id}`;
          // Distinct queries ensure the initial district dropdown contains the
          // complete administrative list, not just districts present in the
          // first page of village records.
          const [districtRows, tehsilRows, villageRows] = await Promise.all([
            fetchDistinctValues(
              hierarchyUrl,
              [hierarchyLayer.districtName, ...(hierarchyLayer.districtCode ? [hierarchyLayer.districtCode] : [])],
              controller.signal
            ),
            fetchDistinctValues(
              hierarchyUrl,
              [hierarchyLayer.districtName, ...(hierarchyLayer.districtCode ? [hierarchyLayer.districtCode] : []), hierarchyLayer.tehsilName, ...(hierarchyLayer.tehsilCode ? [hierarchyLayer.tehsilCode] : [])],
              controller.signal
            ),
            fetchDistinctValues(
              hierarchyUrl,
              [hierarchyLayer.districtName, ...(hierarchyLayer.districtCode ? [hierarchyLayer.districtCode] : []), hierarchyLayer.tehsilName, ...(hierarchyLayer.tehsilCode ? [hierarchyLayer.tehsilCode] : []), hierarchyLayer.villageName, ...(hierarchyLayer.villageCode ? [hierarchyLayer.villageCode] : [])],
              controller.signal
            ),
          ]);
          setBoundaryRows({
            districts: districtRows,
            tehsils: tehsilRows,
            villages: villageRows,
            fields: {
              districtName: hierarchyLayer.districtName,
              districtCode: hierarchyLayer.districtCode,
              tehsilName: hierarchyLayer.tehsilName,
              tehsilCode: hierarchyLayer.tehsilCode,
              villageName: hierarchyLayer.villageName,
              villageCode: hierarchyLayer.villageCode,
              tehsilDistrict: hierarchyLayer.districtName,
              tehsilDistrictCode: hierarchyLayer.districtCode,
              villageDistrict: hierarchyLayer.districtName,
              villageDistrictCode: hierarchyLayer.districtCode,
              villageTehsil: hierarchyLayer.tehsilName,
              villageTehsilCode: hierarchyLayer.tehsilCode,
              sourceLayerId: hierarchyLayer.layer.id,
            },
          });
          return;
        }

        // Fallback for services that expose separate administrative layers.
        const districtLayer = selectLayer(layers, "district");
        const tehsilLayer = selectLayer(layers, "tehsil");
        const villageLayer = selectLayer(layers, "village");

        if (!districtLayer || !tehsilLayer || !villageLayer) {
          throw new Error(
            "Could not find a layer with N_D_NAME, N_T_NAME and N_V_NAME, or separate district, tehsil/block and village layers."
          );
        }

        const [districtMeta, tehsilMeta, villageMeta] = await Promise.all([
          getJson(`${BOUNDARY_SERVICE}${districtLayer.id}?f=pjson`, controller.signal),
          getJson(`${BOUNDARY_SERVICE}${tehsilLayer.id}?f=pjson`, controller.signal),
          getJson(`${BOUNDARY_SERVICE}${villageLayer.id}?f=pjson`, controller.signal),
        ]);

        const fields = {
          districtName: findField(districtMeta.fields, FIELD_CANDIDATES.district),
          districtCode: findField(districtMeta.fields, FIELD_CANDIDATES.districtCode),
          tehsilName: findField(tehsilMeta.fields, FIELD_CANDIDATES.tehsil),
          tehsilDistrict: findField(tehsilMeta.fields, FIELD_CANDIDATES.districtParent),
          tehsilDistrictCode: findField(tehsilMeta.fields, FIELD_CANDIDATES.districtCode),
          tehsilCode: findField(tehsilMeta.fields, FIELD_CANDIDATES.tehsilCode),
          villageName: findField(villageMeta.fields, FIELD_CANDIDATES.village),
          villageDistrict: findField(villageMeta.fields, FIELD_CANDIDATES.districtParent),
          villageTehsil: findField(villageMeta.fields, FIELD_CANDIDATES.tehsilParent),
          villageDistrictCode: findField(villageMeta.fields, FIELD_CANDIDATES.districtCode),
          villageTehsilCode: findField(villageMeta.fields, FIELD_CANDIDATES.tehsilCode),
        };

        const [districts, tehsils, villages] = await Promise.all([
          fetchAllFeatures(`${BOUNDARY_SERVICE}${districtLayer.id}`, controller.signal),
          fetchAllFeatures(`${BOUNDARY_SERVICE}${tehsilLayer.id}`, controller.signal),
          fetchAllFeatures(`${BOUNDARY_SERVICE}${villageLayer.id}`, controller.signal),
        ]);
        setBoundaryRows({ districts, tehsils, villages, fields });
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(
            `${err.message || "Unable to load administrative boundaries."} Dropdowns will use tree survey records as a fallback.`
          );
        }
      } finally {
        if (!controller.signal.aborted) setBoundaryLoading(false);
      }
    }

    loadBoundaries();
    return () => controller.abort();
  }, []);

  const scopedTreeData = useMemo(
    () =>
      treeData.filter(
        (tree) =>
          (!draft.district || same(tree.n_d_name, draft.district)) &&
          (!draft.tehsil || same(tree.n_t_name, draft.tehsil)) &&
          (!draft.village || same(tree.n_v_name, draft.village))
      ),
    [treeData, draft.district, draft.tehsil, draft.village]
  );

  const districts = useMemo(() => {
    const { districts: rows, fields } = boundaryRows;
    if (rows.length && fields.districtName) {
      return uniqueOptions(rows, fields.districtCode, fields.districtName).map((item) => ({
        value: titleCaseName(item.value),
        matchValue: item.value,
        code: item.code,
      }));
    }
    return uniqueOptions(
      treeData.map((tree) => ({ name: tree.n_d_name })),
      null,
      "name"
    ).map((item) => ({ value: titleCaseName(item.value), matchValue: item.value, code: "" }));
  }, [boundaryRows, treeData]);

  const tehsils = useMemo(() => {
    const { tehsils: rows, fields } = boundaryRows;
    if (rows.length && fields.tehsilName) {
      const filtered = rows.filter((row) => {
        if (!draft.district) return true;
        const parentName = fields.tehsilDistrict ? row[fields.tehsilDistrict] : "";
        if (text(parentName)) return same(parentName, draft.district);
        if (fields.tehsilDistrictCode && fields.districtCode) {
          const selected = districts.find((item) => same(item.value, draft.district));
          if (selected?.code) return same(row[fields.tehsilDistrictCode], selected.code);
        }
        return true;
      });
      return uniqueOptions(filtered, fields.tehsilCode, fields.tehsilName).map((item) => ({
        value: titleCaseName(item.value),
        matchValue: item.value,
        code: item.code,
      }));
    }
    return uniqueOptions(
      treeData
        .filter((tree) => !draft.district || same(tree.n_d_name, draft.district))
        .map((tree) => ({ name: tree.n_t_name, code: tree.n_t_code })),
      "code",
      "name"
    ).map((item) => ({ value: titleCaseName(item.value), matchValue: item.value, code: item.code }));
  }, [boundaryRows, treeData, draft.district, districts]);

  const villages = useMemo(() => {
    const { villages: rows, fields } = boundaryRows;
    if (rows.length && fields.villageName) {
      const filtered = rows.filter((row) => {
        if (draft.district && fields.villageDistrict && text(row[fields.villageDistrict])) {
          if (!same(row[fields.villageDistrict], draft.district)) return false;
        } else if (draft.district && fields.villageDistrictCode && fields.districtCode) {
          const selected = districts.find((item) => same(item.value, draft.district));
          if (selected?.code && !same(row[fields.villageDistrictCode], selected.code)) return false;
        }

        if (draft.tehsil && fields.villageTehsil && text(row[fields.villageTehsil])) {
          if (!same(row[fields.villageTehsil], draft.tehsil)) return false;
        } else if (draft.tehsil && fields.villageTehsilCode && fields.tehsilCode) {
          const selected = tehsils.find((item) => same(item.value, draft.tehsil));
          if (selected?.code && !same(row[fields.villageTehsilCode], selected.code)) return false;
        }
        return true;
      });
      return uniqueOptions(filtered, fields.villageCode, fields.villageName).map((item) => ({
        value: titleCaseName(item.value),
        matchValue: item.value,
        code: item.code,
      }));
    }
    return uniqueOptions(
      scopedTreeData.map((tree) => ({ name: tree.n_v_name, code: tree.n_v_code })),
      "code",
      "name"
    ).map((item) => ({ value: titleCaseName(item.value), matchValue: item.value, code: item.code }));
  }, [boundaryRows, treeData, draft.district, draft.tehsil, scopedTreeData, districts, tehsils]);

  // Use every species from mst_tree_Species, not only species present in filtered survey rows.
  const species = useMemo(() => {
    const names = [...masterSpecies];
    // Preserve a currently selected species even if its spelling differs from the master list.
    if (draft.species && !names.some((name) => same(name, draft.species))) names.push(draft.species);
    return uniqueSorted(names);
  }, [masterSpecies, draft.species]);

  const treeIds = useMemo(
    () =>
      [...new Set(scopedTreeData.map((tree) => text(tree.tree_id)).filter(Boolean))].sort(
        (a, b) => a.localeCompare(b, undefined, { numeric: true })
      ),
    [scopedTreeData]
  );

  const update = (key, value) => {
    setError("");
    setDraft((previous) => {
      const next = { ...previous, [key]: value };
      if (key === "district") {
        Object.assign(next, { tehsil: "", village: "", species: "", treeId: "" });
      }
      if (key === "tehsil") {
        Object.assign(next, { village: "", species: "", treeId: "" });
      }
      if (key === "village") {
        Object.assign(next, { species: "", treeId: "" });
      }
      return next;
    });
  };

  const inputClass =
    "mt-1 w-full min-w-0 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-normal text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400";
  const labelClass = "block min-w-0 text-xs font-semibold text-slate-600";

  const apply = () => {
    setError("");
    if (draft.startDate && draft.endDate && draft.startDate > draft.endDate) {
      setError("End date must be on or after the start date.");
      return;
    }
    if (draft.tehsil && !draft.district) {
      setError("Select a district before selecting a tehsil.");
      return;
    }
    if (draft.village && !draft.tehsil) {
      setError("Select a tehsil before selecting a village.");
      return;
    }
    onApply?.({ ...draft });
    onClose?.();
  };

  const reset = () => {
    setDraft({ ...EMPTY_FILTERS });
    setError("");
    onApply?.({ ...EMPTY_FILTERS });
  };

  return (
    <section className="w-full min-w-0 bg-transparent">
      <div className="mb-4 flex items-center justify-between rounded-xl bg-emerald-50 px-3 py-3">
        <div>
          <p className="text-sm font-bold text-slate-800">Tree survey filters</p>
          <p className="mt-0.5 text-xs text-slate-500">
            {boundaryLoading ? "Loading administrative boundaries…" : "Refine mapped records"}
          </p>
        </div>
        <span className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-emerald-700">
          {loading ? "Loading…" : `${Number(resultCount).toLocaleString("en-IN")} trees`}
        </span>
      </div>

      <div className="space-y-3.5">
        <label className={labelClass}>
          District
          <select className={inputClass} value={draft.district} onChange={(event) => update("district", event.target.value)}>
            <option value="">All districts</option>
            {districts.map((item) => <option key={`${item.code}-${item.value}`} value={item.value}>{item.value}</option>)}
          </select>
        </label>

        <label className={labelClass}>
          Tehsil / Block
          <select className={inputClass} value={draft.tehsil} onChange={(event) => update("tehsil", event.target.value)} disabled={!draft.district}>
            <option value="">All tehsils</option>
            {tehsils.map((item) => <option key={`${item.code}-${item.value}`} value={item.value}>{item.value}</option>)}
          </select>
        </label>

        <label className={labelClass}>
          Village
          <select className={inputClass} value={draft.village} onChange={(event) => update("village", event.target.value)} disabled={!draft.tehsil}>
            <option value="">All villages</option>
            {villages.map((item) => <option key={`${item.code}-${item.value}`} value={item.value}>{item.value}</option>)}
          </select>
        </label>

        <div className="grid grid-cols-2 gap-2">
          <label className={labelClass}>
            Start date
            <input className={inputClass} type="date" value={draft.startDate} max={draft.endDate || undefined} onChange={(event) => update("startDate", event.target.value)} />
          </label>
          <label className={labelClass}>
            End date
            <input className={inputClass} type="date" value={draft.endDate} min={draft.startDate || undefined} onChange={(event) => update("endDate", event.target.value)} />
          </label>
        </div>

        <label className={labelClass}>
          Tree species
          <select className={inputClass} value={draft.species} onChange={(event) => update("species", event.target.value)}>
            <option value="">All species</option>
            {speciesLoading && <option value="" disabled>Loading species…</option>}
              {species.map((value) => <option key={value} value={value}>{value}</option>)}
          </select>
        </label>

        <label className={labelClass}>
          Tree ID
          <select className={inputClass} value={draft.treeId} onChange={(event) => update("treeId", event.target.value)}>
            <option value="">All tree IDs</option>
            {treeIds.map((value) => <option key={value} value={value}>{value}</option>)}
          </select>
        </label>
      </div>

      {error && (
        <p role="alert" className="mt-3 rounded-lg bg-red-50 p-3 text-xs font-medium text-red-700">
          {error}
        </p>
      )}

      <div className="sticky bottom-0 mt-5 grid grid-cols-2 gap-2 border-t border-slate-100 bg-white py-3">
        <button type="button" onClick={reset} className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
          Reset
        </button>
        <button type="button" onClick={apply} disabled={loading} className="rounded-xl bg-emerald-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60">
          Apply filters
        </button>
      </div>
    </section>
  );
}
