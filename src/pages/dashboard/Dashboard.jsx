import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import axios from "axios";

import { mappingData } from "../../api/api";

import Filter from "./Filters";

import ViewMap from "./Map";

import Header from "../../layout/Header";

import Surveyed from "./SurveyedTrees";

import Legend from "./Legend";

import CountCards from "./CountCards";



const emptyFilters = {

  district: "",

  tehsil: "",

  village: "",

  startDate: "",

  endDate: "",

  species: "",

  treeId: "",

};



const first = (...values) =>

  values.find((value) => value !== undefined && value !== null && value !== "");



const field = (row, ...names) => {

  const entries = Object.entries(row || {});

  for (const name of names) {

    const target = name.toLowerCase().replace(/[^a-z0-9]/g, "");

    const found = entries.find(

      ([key]) => key.toLowerCase().replace(/[^a-z0-9]/g, "") === target

    );

    if (found && found[1] !== null && found[1] !== undefined) return found[1];

  }

  return undefined;

};



const toDegrees = (value, isLatitude) => {

  if (value === null || value === undefined || value === "") return "";

  const number = Number(value);

  if (!Number.isFinite(number)) return "";

  const limit = isLatitude ? 90 : 180;

  if (Math.abs(number) <= limit) return number;

  const radius = 6378137;

  return isLatitude

    ? ((2 * Math.atan(Math.exp(number / radius)) - Math.PI / 2) * 180) / Math.PI

    : ((number / radius) * 180) / Math.PI;

};



const normalizeTree = (row) => {

  const latitudeRaw = field(row, "latitude", "lat", "y", "shape_y");

  const longitudeRaw = field(row, "longitude", "lon", "long", "x", "shape_x");

  return {

    ...row,

    tree_id: first(field(row, "tree_id", "treeid", "tree_code", "id"), ""),

    tree_species: first(

      field(row, "tree_species", "tree_species_name", "species_name", "species", "species_details"),

      "Unknown species"

    ),

    n_d_name: first(field(row, "n_d_name", "district_name", "district", "d_name"), ""),

    n_t_name: first(field(row, "n_t_name", "tehsil_name", "tehsil", "block_name", "t_name"), ""),

    n_v_name: first(field(row, "n_v_name", "village_name", "village", "v_name"), ""),

    survey_status: first(field(row, "survey_status", "status", "approval_status"), "Surveyed"),

    created_date: first(field(row, "created_date", "survey_date", "created_at", "date"), ""),

    latitude: toDegrees(latitudeRaw, true),

    longitude: toDegrees(longitudeRaw, false),

  };

};



const unwrapRecords = (payload) => {

  let value = payload?.data ?? payload;

  if (typeof value === "string") {

    try {

      value = JSON.parse(value);

    } catch {

      return [];

    }

  }

  if (Array.isArray(value)) return value;

  const candidates = [

    value?.data,

    value?.records,

    value?.result,

    value?.results,

    value?.data?.data,

    value?.data?.records,

  ];

  return candidates.find(Array.isArray) || [];

};



const norm = (value) => String(value ?? "").trim().toLowerCase();



const MIN_TABLE_HEIGHT = 35;
const MAX_TABLE_HEIGHT = 80;
const INITIAL_TABLE_HEIGHT = 50;

export default function Dashboard() {

  const [allTreeData, setAllTreeData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [apiError, setApiError] = useState("");

  const [filters, setFilters] = useState(emptyFilters);

  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const [isCardsOpen, setIsCardsOpen] = useState(true);

  const [isLegendOpen, setIsLegendOpen] = useState(true);

  const [speciesColors, setSpeciesColors] = useState({});

  const [selectedSpecies, setSelectedSpecies] = useState("");

  const [isSurveyedOpen, setIsSurveyedOpen] = useState(false);

  const [isTableExpanded, setIsTableExpanded] = useState(false);
  const [tablePanelHeight, setTablePanelHeight] = useState(INITIAL_TABLE_HEIGHT);
  const [isTableResizing, setIsTableResizing] = useState(false);
  const tableResizeStartRef = useRef({ y: 0, height: INITIAL_TABLE_HEIGHT });
  const [filterResetKey, setFilterResetKey] = useState(0);

  // Resize the dashboard table panel; the table itself owns its scroll area.
  useEffect(() => {
    if (!isTableResizing) return undefined;

    const handlePointerMove = (event) => {
      const viewportHeight = window.innerHeight || 1;
      const deltaVh =
        ((tableResizeStartRef.current.y - event.clientY) / viewportHeight) * 100;
      const nextHeight = tableResizeStartRef.current.height + deltaVh;

      setTablePanelHeight(
        Math.min(MAX_TABLE_HEIGHT, Math.max(MIN_TABLE_HEIGHT, nextHeight))
      );
    };

    const handlePointerUp = () => setIsTableResizing(false);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [isTableResizing]);

  const startTableResize = (event) => {
    event.preventDefault();
    tableResizeStartRef.current = {
      y: event.clientY,
      height: tablePanelHeight,
    };
    setIsTableResizing(true);
  };



  useEffect(() => {

    const controller = new AbortController();

    const load = async () => {

      setLoading(true);

      setApiError("");

      try {

        const response = await axios.get(mappingData.SurveyedData, {

          signal: controller.signal,

          headers: { Accept: "application/json" },

        });

        const records = unwrapRecords(response.data).map(normalizeTree);

        setAllTreeData(records);

        if (!records.length) {

          setApiError("The surveyed-tree API returned no records or an unsupported response format.");

        }

      } catch (error) {

        if (error.code !== "ERR_CANCELED" && error.name !== "CanceledError") {

          console.error("Surveyed tree API error:", error);

          setApiError("Unable to load surveyed tree records. Check the API response, network connection, and CORS settings.");

        }

      } finally {

        if (!controller.signal.aborted) setLoading(false);

      }

    };

    load();

    return () => controller.abort();

  }, []);



  const clearFilters = useCallback(() => {

    setFilters({ ...emptyFilters });

    setIsFilterOpen(true);

    setIsCardsOpen(true);

    setIsLegendOpen(true);

    setIsSurveyedOpen(false);

    setIsTableExpanded(false);

    setSelectedSpecies("");

  }, []);



  const applyFilters = useCallback((nextFilters) => {

    const next = nextFilters || emptyFilters;

    setFilters({ ...next });

    if (Object.values(next).every((value) => !String(value ?? "").trim())) {

      setFilterResetKey((key) => key + 1);

    }

  }, []);



  const filteredData = useMemo(

    () =>

      allTreeData.filter((tree) => {

        if (filters.district && norm(tree.n_d_name) !== norm(filters.district)) return false;

        if (filters.tehsil && norm(tree.n_t_name) !== norm(filters.tehsil)) return false;

        if (filters.village && norm(tree.n_v_name) !== norm(filters.village)) return false;

        if (filters.species && norm(tree.tree_species) !== norm(filters.species)) return false;

        if (selectedSpecies && norm(tree.tree_species) !== norm(selectedSpecies)) return false;

        if (filters.treeId && norm(tree.tree_id) !== norm(filters.treeId)) return false;



        const rawDate = tree.created_date;

        const parsed = rawDate ? new Date(rawDate) : null;

        const date =

          parsed && !Number.isNaN(parsed.getTime())

            ? parsed.toISOString().slice(0, 10)

            : String(rawDate ?? "").slice(0, 10);

        if (filters.startDate && (!date || date < filters.startDate)) return false;

        if (filters.endDate && (!date || date > filters.endDate)) return false;

        return true;

      }),

    [allTreeData, filters, selectedSpecies]

  );



  const surveyed = filteredData.filter((tree) =>

    /surveyed|verified|approved/i.test(String(tree.survey_status ?? ""))

  ).length;

  const approved = filteredData.filter((tree) => /approved/i.test(String(tree.survey_status ?? ""))).length;

  const pending = filteredData.filter((tree) => /pending/i.test(String(tree.survey_status ?? ""))).length;



  const openSurveyed = () => {

    if (window.innerWidth < 1280) setIsFilterOpen(false);

    setIsSurveyedOpen(true);

    setIsTableExpanded(false);

  };



  return (

    <main className="fixed inset-0 flex h-dvh min-h-0 w-full flex-col overflow-hidden bg-slate-100 text-slate-800">

      <Header />

      <div className="relative min-h-0 flex-1 overflow-hidden">

        <div className="absolute inset-0 z-0">

          <ViewMap

            treeData={allTreeData}

            filters={filters}

            loading={loading}

            onResetFilters={clearFilters}

            resetKey={filterResetKey}

            filterPanelOpen={isFilterOpen}

            speciesColors={speciesColors}

            selectedSpecies={selectedSpecies}

          />

        </div>



        {/* Left filter panel */}

        <aside

          className={`absolute inset-y-0 left-0 z-40 flex h-full min-h-0 w-[min(88vw,340px)] flex-col overflow-hidden border-r border-slate-200 bg-white shadow-2xl transition-transform duration-300 sm:w-[350px] lg:w-[310px] xl:w-[320px] ${

            isFilterOpen ? "translate-x-0" : "-translate-x-full"

          }`}

        >

          <div className="flex h-14 shrink-0 items-center justify-between border-b border-slate-200 px-4">

            <div className="flex items-center gap-2">

              <i className="pi pi-sliders-h text-emerald-600" />

              <span className="text-sm font-bold">Tree Filters</span>

            </div>

            <button

              type="button"

              onClick={() => setIsFilterOpen(false)}

              className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-100"

              aria-label="Close filters"

            >

              <i className="pi pi-times" />

            </button>

          </div>

          <div className="min-h-0 flex-1 overflow-y-auto p-3">

            <Filter

              treeData={allTreeData}

              onApply={applyFilters}

              appliedValue={filters}

              loading={loading}

              resultCount={filteredData.length}

              onClose={() => setIsFilterOpen(false)}

            />

          </div>

        </aside>



        {!isFilterOpen && (

          <button

            type="button"

            onClick={() => setIsFilterOpen(true)}

            className="absolute left-3 top-3 z-30 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold shadow-lg"

          >

            <i className="pi pi-sliders-h text-emerald-600" /> Filters

          </button>

        )}







{/* Responsive Statistics Section */}

{isCardsOpen ? (

  <section

    className={`

      pointer-events-auto absolute top-3 z-20

      left-1/2 -translate-x-1/2

      w-[calc(100%-24px)]

      sm:w-[calc(100%-32px)]

      lg:w-auto

      transition-all duration-300

      ${

        isFilterOpen

          ? "lg:left-[calc(50%+155px)]"

          : "lg:left-1/2"

      }

      ${

        isLegendOpen

          ? "lg:right-[305px]"

          : "lg:right-3"

      }

    `}

  >

    {/* Statistics Header */}

    <div className="mb-3 flex h-12 items-center justify-between rounded-xl border border-slate-200 bg-white/95 px-4 shadow-lg backdrop-blur">

      <span className="text-base font-bold text-slate-800">

        <i className="pi pi-chart-bar mr-2 text-blue-600" />

        Statistics

      </span>



      <button

        type="button"

        onClick={() => setIsCardsOpen(false)}

        aria-label="Hide statistics"

        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100"

      >

        <i className="pi pi-times text-xl" />

      </button>

    </div>



    {/* Statistics Cards */}

    <CountCards

      totalRecords={filteredData.length}

      surveyedTreeCount={surveyed}

      approvedTreeCount={approved}

      pendingTreeCount={pending}

    />

  </section>

) : (

  <button

    type="button"

    onClick={() => setIsCardsOpen(true)}

    className="absolute left-1/2 top-3 z-30 -translate-x-1/2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold shadow-lg"

  >

    <i className="pi pi-chart-bar mr-2 text-blue-600" />

    Statistics

  </button>

)}







        {/* Legend is pinned to the top-right; on narrow screens it sits below the cards. */}

        {isLegendOpen ? (

          <div className="absolute right-3 top-[176px] z-20 w-[min(280px,calc(100%-24px))] sm:top-3 sm:w-[min(280px,34vw)] lg:w-[280px]">

            <Legend

              treeData={filteredData}

              className="!static !w-full"

              onClose={() => setIsLegendOpen(false)}

              onSpeciesColorsChange={setSpeciesColors}

              selectedSpecies={selectedSpecies}

              onSpeciesSelect={setSelectedSpecies}

            />

          </div>

        ) : (

          <button

            type="button"

            onClick={() => setIsLegendOpen(true)}

            className="absolute right-3 top-[176px] z-30 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-lg xl:top-3"

          >

            Tree Legend

          </button>

        )}



        {apiError && (

          <div role="alert" className="absolute bottom-16 left-3 right-3 z-50 rounded-xl border border-red-200 bg-white p-3 text-sm text-red-700 shadow">

            {apiError}

          </div>

        )}



        {!isSurveyedOpen && (

          <div className="absolute bottom-3 left-1/2 z-30 -translate-x-1/2">

            <button

              type="button"

              onClick={openSurveyed}

              className="flex items-center gap-2 whitespace-nowrap rounded-full bg-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-xl hover:bg-blue-800"

            >

              <i className="pi pi-table" /> Surveyed Tree Data <i className="pi pi-angle-double-up" />

            </button>

          </div>

        )}



        <section
          className={`absolute bottom-0 left-0 right-0 z-[60] flex flex-col overflow-hidden border border-slate-200 bg-white shadow-2xl transition-[height,left,right] duration-200 sm:left-2 sm:right-2 lg:left-[310px] xl:left-[320px] ${
            isSurveyedOpen ? "rounded-t-2xl" : "pointer-events-none translate-y-full"
          } ${isTableExpanded ? "rounded-none" : "rounded-t-2xl"} ${
            isTableResizing ? "select-none" : ""
          }`}
          style={{
            height: isSurveyedOpen
              ? isTableExpanded
                ? "100%"
                : `${tablePanelHeight}vh`
              : "0px",
            minHeight: isSurveyedOpen && !isTableExpanded ? "35vh" : 0,
            maxHeight: isTableExpanded ? "100%" : "80vh",
            transition: isTableResizing ? "none" : "height 150ms ease",
          }}
        >

          {isSurveyedOpen && !isTableExpanded && (
            <div className="flex h-5 shrink-0 items-center justify-center border-b border-slate-100">
              <button
                type="button"
                onPointerDown={startTableResize}
                className="flex h-5 w-20 touch-none cursor-ns-resize items-center justify-center rounded-full text-slate-400 hover:text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Resize surveyed tree table"
                title="Drag up or down to resize the table"
              >
                <span className="h-1.5 w-12 rounded-full bg-slate-300 transition-colors hover:bg-slate-500" />
              </button>
            </div>
          )}
          <div className="flex min-h-12 shrink-0 items-center justify-between gap-2 border-b border-slate-200 px-3 sm:min-h-14 sm:px-4">

            <div className="flex items-center gap-2 text-sm font-semibold">

              <i className="pi pi-table text-blue-700" /> <span>Surveyed Tree Data</span>

            </div>

            <div className="flex items-center gap-1">

              <button

                type="button"

                onClick={() => setIsTableExpanded((value) => !value)}

                className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-100"

                aria-label={isTableExpanded ? "Restore table size" : "Expand table"}

              >

                <i className={`pi ${isTableExpanded ? "pi-window-minimize" : "pi-window-maximize"}`} />

              </button>

              <button

                type="button"

                onClick={() => {

                  setIsSurveyedOpen(false);

                  setIsTableExpanded(false);

                }}

                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200"

                aria-label="Close surveyed table"

              >

                <i className="pi pi-times" />

              </button>

            </div>

          </div>

          <div className="min-h-0 flex-1 overflow-hidden p-2 sm:p-3">

            <Surveyed data={filteredData} loading={loading} error={apiError} />

          </div>

        </section>

      </div>

    </main>

  );

}
