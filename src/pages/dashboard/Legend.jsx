import React, { useEffect, useMemo, useState } from "react";

const SURVEYED_DATA_API = "https://hsac.org.in/API_HKVPY/api_tree_survey_hkvpy/get_gdb_tree";

const ALL_TABLES_API = "https://hsac.org.in/API_HKVPY/api_tree_survey_hkvpy/get_mst_tables";

function uniqueSpeciesColor(index) {
  // Golden-angle hue spacing gives each species a distinct, deterministic colour.
  const hue = ((220 + index * 137.508) % 360) / 60;
  const saturation = 0.78;
  const lightness = 0.42;
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const x = chroma * (1 - Math.abs((hue % 2) - 1));
  const m = lightness - chroma / 2;
  const sectors = [
    [chroma, x, 0], [x, chroma, 0], [0, chroma, x],
    [0, x, chroma], [x, 0, chroma], [chroma, 0, x],
  ];
  const rgb = sectors[Math.floor(hue) % 6].map((channel) =>
    Math.round((channel + m) * 255)
  );
  return `#${rgb.map((channel) => channel.toString(16).padStart(2, "0")).join("").toUpperCase()}`;
}

const clean = (v) => String(v ?? "").trim();

const normalize = (v) => clean(v).toLowerCase().replace(/\s+/g, " ");

const keyOf = (v) => normalize(v).replace(/[^a-z0-9]/g, "");

const first = (...values) => values.find((v) => v !== undefined && v !== null && clean(v) !== "");

const parseMaybeJson = (v) => {

  if (typeof v !== "string") return v;

  try { return JSON.parse(v); } catch { return v; }

};

function getRecords(payload) {

  const root = parseMaybeJson(payload);

  if (Array.isArray(root)) return root;

  if (!root || typeof root !== "object") return [];

  for (const v of [root.data, root.records, root.result, root.results, root.rows, root.items,

    root.data?.data, root.data?.records, root.result?.data, root.result?.records]) {

    const parsed = parseMaybeJson(v);

    if (Array.isArray(parsed)) return parsed;

  }

  return [];

}

function readField(row, names) {

  const wanted = new Set(names.map(keyOf));

  for (const [k, v] of Object.entries(row || {})) {

    if (wanted.has(keyOf(k)) && v !== null && v !== undefined && clean(v) !== "") return v;

  }

  return undefined;

}

const isNumericId = (v) => /^\d+(?:\.\d+)?$/.test(clean(v));

const speciesName = (r) => {

  const named = first(

    readField(r, ["tree_species_name", "species_name", "speciesName", "TreeSpeciesName", "species_desc", "species_description", "tree_species_desc", "tree_species_nm"]),

    readField(r, ["common_name", "Common_Name", "commonName", "tree_name", "TreeName"]),

    readField(r, ["Scientific_Name", "scientific_name", "scientificName", "botanical_name"])

  );

  if (named && !isNumericId(named)) return named;

  const fallback = readField(r, ["tree_species", "species", "name"]);

  return fallback && !isNumericId(fallback) ? fallback : undefined;

};

const speciesId = (r) => readField(r, ["tree_species_id", "species_id", "speciesId", "TreeSpeciesID", "mst_tree_species_id", "species_code", "id"]);

const surveyName = (r) => {

  const named = first(

    readField(r, ["tree_species_name", "species_name", "speciesName", "TreeSpeciesName", "species_details", "species_desc", "tree_species_desc", "tree_species_nm"]),

    readField(r, ["common_name", "Common_Name", "commonName", "tree_name", "TreeName"]),

    readField(r, ["Scientific_Name", "scientific_name", "scientificName", "botanical_name"])

  );

  if (named && !isNumericId(named)) return named;

  const fallback = readField(r, ["tree_species", "species"]);

  return fallback && !isNumericId(fallback) ? fallback : undefined;

};

const surveyId = (r) => readField(r, ["tree_species_id", "species_id", "speciesId", "TreeSpeciesID", "mst_tree_species_id", "species_code"]);

function getMasterSpecies(payload) {

  const root = parseMaybeJson(payload);

  const tableNames = new Set(["msttreespecies", "treesspecies", "treespecies", "msttreespecieslist"]);

  const arr = (v) => {

    const p = parseMaybeJson(v);

    if (Array.isArray(p)) return p;

    if (p && typeof p === "object") {

      for (const k of ["data", "rows", "records", "result", "items", "list"]) {

        const q = parseMaybeJson(p[k]);

        if (Array.isArray(q)) return q;

      }

    }

    return null;

  };

  const looksLikeSpecies = (a) => Array.isArray(a) && a.some((r) => speciesName(r) || speciesId(r));

  if (Array.isArray(root)) {

    for (const item of root) {

      const tableName = keyOf(readField(item, ["table_name", "tableName", "tablename", "table", "key"]));

      if (tableNames.has(tableName)) {

        const rows = arr(item);

        if (rows) return rows;

      }

    }

    if (looksLikeSpecies(root)) return root;

    for (const item of root) { const rows = arr(item); if (looksLikeSpecies(rows)) return rows; }

    return [];

  }

  if (!root || typeof root !== "object") return [];

  const direct = ["mst_tree_species", "MST_TREE_SPECIES", "mstTreeSpecies", "msttreespecies", "tree_species", "treeSpecies", "TreeSpecies"];

  for (const k of direct) {

    for (const container of [root, root.data, root.tables, root.result]) {

      if (container && container[k] !== undefined) {

        const rows = arr(container[k]);

        if (rows) return rows;

      }

    }

  }

  for (const container of [root, root.data, root.tables, root.result]) {

    if (!container || typeof container !== "object") continue;

    for (const [k, v] of Object.entries(container)) {

      const tableName = keyOf(k);

      const rows = arr(v);

      if (tableNames.has(tableName) && rows) return rows;

      if (looksLikeSpecies(rows)) return rows;

    }

  }

  return [];

}

function aliasesFor(value) {

  const text = clean(value);

  if (!text) return [];

  const aliases = new Set([normalize(text), keyOf(text)]);

  // A master label like "Desi Ber (Ziziphus mauritiana)" should match either API field.

  const noParens = text.replace(/\s*\([^)]*\)/g, "").trim();

  if (noParens) { aliases.add(normalize(noParens)); aliases.add(keyOf(noParens)); }

  const inside = [...text.matchAll(/\(([^)]+)\)/g)].map((m) => m[1]);

  inside.forEach((v) => { aliases.add(normalize(v)); aliases.add(keyOf(v)); });

  return [...aliases].filter(Boolean);

}

function TreeSymbol({ color }) {

  return <svg width="22" height="24" viewBox="0 0 24 26" aria-hidden="true">

    <path d="M12 2 5.7 10h3L4 16h5.2v4h5.6v-4H20l-4.7-6h3L12 2Z" fill={color} />

    <path d="M10.5 19.5h3V25h-3z" fill={color} />

  </svg>;

}

export default function Legend({

  treeData,

  className = "",

  apiUrl = ALL_TABLES_API,

  surveyedApiUrl = SURVEYED_DATA_API,

  isOpen = true,

  onClose = () => {},

  onSpeciesColorsChange = () => {},

  selectedSpecies = "",

  onSpeciesSelect = () => {},

}) {

  const [speciesRows, setSpeciesRows] = useState([]);

  const [surveyRows, setSurveyRows] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // Always fetch the authoritative survey table for counts. `treeData` may be filtered

  // map data or may use different field names, which previously caused every count to be 0.

  useEffect(() => {

    const controller = new AbortController();

    async function load() {

      setLoading(true);

      setError("");

      try {

        const [masterRes, surveyRes] = await Promise.all([

          fetch(apiUrl, { headers: { Accept: "application/json" }, signal: controller.signal }),

          fetch(surveyedApiUrl, { headers: { Accept: "application/json" }, signal: controller.signal }),

        ]);

        if (!masterRes.ok) throw new Error(`Species master API failed (${masterRes.status}).`);

        if (!surveyRes.ok) throw new Error(`Survey data API failed (${surveyRes.status}).`);

        const [masterPayload, surveyPayload] = await Promise.all([masterRes.json(), surveyRes.json()]);

        const masters = getMasterSpecies(masterPayload).filter((r) => speciesName(r));

        const surveys = getRecords(surveyPayload);

        if (!masters.length) throw new Error("Could not find the tree-species master table in get_mst_tables response.");

        if (!surveys.length) throw new Error("No survey records found in get_gdb_tree response.");

        setSpeciesRows(masters);

        setSurveyRows(surveys);

      } catch (e) {

        if (e.name !== "AbortError") setError(e.message || "Unable to load tree counts.");

      } finally {

        if (!controller.signal.aborted) setLoading(false);

      }

    }

    load();

    return () => controller.abort();

  }, [apiUrl, surveyedApiUrl]);

  const legendItems = useMemo(() => {

    const masters = new Map();

    speciesRows.forEach((r) => {

      const name = clean(speciesName(r));

      if (!name) return;

      const id = speciesId(r);

      const key = id !== undefined ? `id:${clean(id)}` : `name:${keyOf(name)}`;

      if (!masters.has(key)) masters.set(key, { key, name, id, aliases: aliasesFor(name) });

    });

    const items = [...masters.values()].sort((a, b) => a.name.localeCompare(b.name));

    const idToMasterKey = new Map();

    const aliasToMasterKey = new Map();

    items.forEach((item) => {

      if (item.id !== undefined) idToMasterKey.set(clean(item.id), item.key);

      item.aliases.forEach((alias) => aliasToMasterKey.set(alias, item.key));

    });

    const counts = new Map(items.map((item) => [item.key, 0]));

    surveyRows.forEach((row) => {

      const id = surveyId(row);

      let masterKey = id !== undefined ? idToMasterKey.get(clean(id)) : undefined;

      const name = surveyName(row);

      if (!masterKey && name !== undefined) {

        for (const alias of aliasesFor(name)) {

          masterKey = aliasToMasterKey.get(alias);

          if (masterKey) break;

        }

      }

      // In some API records tree_species is the master-table ID, not a species name.

      if (!masterKey) {

        const rawSpecies = readField(row, ["tree_species", "species"]);

        if (rawSpecies !== undefined) masterKey = idToMasterKey.get(clean(rawSpecies));

      }

      if (masterKey && counts.has(masterKey)) counts.set(masterKey, counts.get(masterKey) + 1);

    });

    return items.map((item, index) => ({

      ...item,

      count: counts.get(item.key) || 0,

      color: uniqueSpeciesColor(index),

    }));

  }, [speciesRows, surveyRows]);

  useEffect(() => {

    const colorMap = {};

    legendItems.forEach((item) => {

      colorMap[normalize(item.name)] = item.color;

      colorMap[keyOf(item.name)] = item.color;

      aliasesFor(item.name).forEach((alias) => { colorMap[alias] = item.color; });

      if (item.id !== undefined) colorMap[clean(item.id)] = item.color;

    });

    onSpeciesColorsChange(colorMap);

  }, [legendItems, onSpeciesColorsChange]);

  if (!isOpen) return null;

  const totalCounted = legendItems.reduce((sum, item) => sum + item.count, 0);

  return (
    <section
      className={`hkvpy-tree-legend ${className}`}
      aria-label="Tree species legend"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxHeight: "min(72vh, 560px)",
        overflow: "hidden",
        padding: 12,
        border: "1px solid #d1d5db",
        borderRadius: 12,
        background: "rgba(255,255,255,0.98)",
        boxShadow: "0 4px 16px rgba(15,23,42,0.16)",
        color: "#1f2937",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Fixed header: remains visible while the species list scrolls. */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 2,
          flex: "0 0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          minHeight: 38,
          margin: "-2px -2px 8px",
          padding: "2px 2px 8px",
          background: "rgba(255,255,255,0.98)",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <strong style={{ fontSize: 15, fontWeight: 700, whiteSpace: "nowrap" }}>
          Tree Species
        </strong>
        <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
          {!loading && !error && (
            <span style={{ fontSize: 11, color: "#6b7280", whiteSpace: "nowrap" }}>
              {legendItems.length} species · {totalCounted.toLocaleString("en-IN")} trees
            </span>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close tree species legend"
            title="Close legend"
            style={{
              flex: "0 0 30px",
              width: 30,
              height: 30,
              border: 0,
              borderRadius: 8,
              background: "#f3f4f6",
              color: "#374151",
              cursor: "pointer",
              fontSize: 20,
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
      </div>

      {loading && (
        <p style={{ margin: 0, padding: "8px 2px", fontSize: 12, color: "#6b7280" }}>
          Loading tree species and counts…
        </p>
      )}
      {error && (
        <p role="alert" style={{ margin: 0, padding: "8px 2px", fontSize: 12, color: "#b91c1c" }}>
          {error}
        </p>
      )}

      {!loading && !error && (
        <>
          <div
            style={{
              flex: "0 0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 8,
              marginBottom: 7,
              padding: "1px 2px 5px",
            }}
          >
            <span style={{ fontSize: 11, color: "#6b7280", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {selectedSpecies ? `Map filtered: ${selectedSpecies}` : "Select a species to filter map"}
            </span>
            {selectedSpecies && (
              <button
                type="button"
                onClick={() => onSpeciesSelect("")}
                style={{
                  flex: "0 0 auto",
                  border: "1px solid #d1d5db",
                  borderRadius: 7,
                  padding: "4px 8px",
                  background: "#fff",
                  color: "#374151",
                  fontSize: 11,
                  cursor: "pointer",
                }}
              >
                Show all
              </button>
            )}
          </div>

          {/* 10 rows are visible; remaining species are available by scrolling. */}
          <div
            className="hkvpy-tree-legend__list"
            style={{
              flex: "0 1 auto",
              minHeight: 0,
              height: 420,
              maxHeight: 420,
              overflowY: "auto",
              overflowX: "hidden",
              paddingRight: 3,
              overscrollBehavior: "contain",
              scrollbarWidth: "thin",
              scrollbarColor: "#cbd5e1 transparent",
            }}
          >
            {legendItems.map((item) => {
              const isSelected = normalize(selectedSpecies) === normalize(item.name);
              return (
                <button
                  key={item.key}
                  type="button"
                  title={`Show only ${item.name} on the map`}
                  aria-pressed={isSelected}
                  onClick={() => onSpeciesSelect(isSelected ? "" : item.name)}
                  style={{
                    boxSizing: "border-box",
                    width: "100%",
                    height: 42,
                    minHeight: 42,
                    display: "grid",
                    gridTemplateColumns: "25px minmax(0, 1fr) auto",
                    alignItems: "center",
                    gap: 8,
                    padding: "4px 7px",
                    border: isSelected ? `1px solid ${item.color}` : "1px solid transparent",
                    borderBottom: isSelected ? `1px solid ${item.color}` : "1px solid #f1f5f9",
                    borderRadius: 8,
                    background: isSelected ? `${item.color}18` : "transparent",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  <TreeSymbol color={item.color} />
                  <span
                    style={{
                      minWidth: 0,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      fontSize: 12,
                      lineHeight: 1.3,
                      color: "#1f2937",
                      fontWeight: isSelected ? 700 : 500,
                    }}
                  >
                    {item.name}
                  </span>
                  <span
                    style={{
                      minWidth: 28,
                      padding: "4px 7px",
                      borderRadius: 999,
                      background: `${item.color}18`,
                      color: item.color,
                      fontSize: 11,
                      fontWeight: 700,
                      textAlign: "center",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {item.count.toLocaleString("en-IN")}
                  </span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}
