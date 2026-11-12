import { useEffect, useMemo, useState } from "react";

import axios from "axios";

import { DataTable } from "primereact/datatable";

import { Column } from "primereact/column";

import * as XLSX from "xlsx";

import jsPDF from "jspdf";

import autoTable from "jspdf-autotable";



const SURVEYED_DATA_API =

  "https\://hsac.org.in/API_HKVPY/api_tree_survey_hkvpy/get_gdb_tree";



// Only these API fields are displayed in the table and included in exports.

const TABLE_COLUMNS = [

  "tree_id",

  "tree_name",

  "bark_type",

  "branch_dam",

  "canopy_den",

  "crown_shap",

  "irrigation",

  "leaf_shape",

  "overall_he",

  "ownership_",

  "phenologic",

  "soil_moist",

  "soil_type",

  "stem_morph",

  "tree_speci",

  "vegetation",

  "latitude",

  "longitude",

  "kill_numbe",

  "jamabandi_",

  "khasra_num",

  "murabba_nu",

  "farmer_id",

  "surveyor_i",

  "small_leaf",

  "medium_lea",

  "large_leaf",

  "tree_age",

  "dbh_image",

  "stem_image",

  "canopy_ima",

  "full_image",

  "disease_im",

  "n_d_name",

  "n_t_name",

  "n_v_name",

  "status",

  "created_da"

];



const displayHeader = (key) =>

  String(key)

    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")

    .replace(/[_-]+/g, " ")

    .replace(/\s+/g, " ")

    .trim()

    .replace(/\b\w/g, (letter) => letter.toUpperCase());



const WEB_MERCATOR_RADIUS = 6378137;



const toDecimalLatitude = (value) => {

  if (value === null || value === undefined || value === "") return value;

  const number = Number(value);

  if (!Number.isFinite(number)) return value;

  if (Math.abs(number) <= 90) return number;

  return (

    (2 * Math.atan(Math.exp(number / WEB_MERCATOR_RADIUS)) - Math.PI / 2) *

    (180 / Math.PI)

  );

};



const toDecimalLongitude = (value) => {

  if (value === null || value === undefined || value === "") return value;

  const number = Number(value);

  if (!Number.isFinite(number)) return value;

  if (Math.abs(number) <= 180) return number;

  return (number / WEB_MERCATOR_RADIUS) * (180 / Math.PI);

};



// Show only the calendar date; remove weekday, time and GMT/time-zone text.

const formatDateOnly = (value) => {

  if (value === null || value === undefined || value === "") return value;



  // Preserve an ISO date if the API already supplies YYYY-MM-DD.

  const isoDate = String(value).match(/^\d{4}-\d{2}-\d{2}/);

  if (isoDate) return isoDate[0];



  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return String(value);



  // UTC keeps dates such as "Fri, 15 May 2026 00:00:00 GMT" unchanged.

  return date.toISOString().slice(0, 10);

};



const displayValue = (record, key) => {

  const value = record?.[key];



  if (key === "latitude") return toDecimalLatitude(value);

  if (key === "longitude") return toDecimalLongitude(value);

  if (key === "created_da") return formatDateOnly(value);



  return value;

};



const cellText = (value) => {

  if (value === null || value === undefined || value === "") return "";

  if (typeof value === "object") return JSON.stringify(value);

  return String(value);

};



export default function Survwed() {

  const [surveyedData, setSurveyedData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [first, setFirst] = useState(0);

  const [rows, setRows] = useState(25);



  useEffect(() => {

    const controller = new AbortController();



    const loadSurveyedData = async () => {

      setLoading(true);

      setError("");



      try {

        const response = await axios.get(SURVEYED_DATA_API, {

          signal: controller.signal,

          headers: { Accept: "application/json" },

        });



        const payload = response.data;

        const records = Array.isArray(payload)

          ? payload

          : Array.isArray(payload?.data)

            ? payload.data

            : Array.isArray(payload?.data?.data)

              ? payload.data.data

              : Array.isArray(payload?.records)

                ? payload.records

                : [];



        setSurveyedData(records);



        if (!records.length && payload?.status && payload.status !== "success") {

          setError(payload?.message || "The API did not return surveyed tree records.");

        }

      } catch (requestError) {

        if (

          requestError.name !== "CanceledError" &&

          requestError.code !== "ERR_CANCELED"

        ) {

          console.error("Previously surveyed tree API error:", requestError);

          setError(

            "Unable to load previously surveyed tree data. Check the API connection and browser network/CORS settings."

          );

        }

      } finally {

        if (!controller.signal.aborted) setLoading(false);

      }

    };



    loadSurveyedData();

    return () => controller.abort();

  }, []);



  // Keep the table restricted to the requested fields, even if the API

  // returns additional properties.

  const filteredData = useMemo(() => {

    const query = search.trim().toLowerCase();

    if (!query) return surveyedData;



    return surveyedData.filter((record) =>

      TABLE_COLUMNS.some((key) =>

        cellText(displayValue(record, key)).toLowerCase().includes(query)

      )

    );

  }, [surveyedData, search]);



  const exportRows = useMemo(

    () =>

      filteredData.map((record, index) => ({

        "S.No.": index + 1,

        ...Object.fromEntries(

          TABLE_COLUMNS.map((key) => [

            displayHeader(key),

            cellText(displayValue(record, key)),

          ])

        ),

      })),

    [filteredData]

  );



  const downloadExcel = () => {

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(

      workbook,

      XLSX.utils.json_to_sheet(

        exportRows.length ? exportRows : [{ "S.No.": "" }]

      ),

      "Previously Surveyed"

    );

    XLSX.writeFile(

      workbook,

      `HKVPY_Previously_Surveyed_Trees_${new Date().toISOString().slice(0, 10)}.xlsx`

    );

  };



  const downloadCSV = () => {

    const headers = exportRows.length

      ? Object.keys(exportRows[0])

      : ["S.No.", ...TABLE_COLUMNS.map(displayHeader)];



    const escapeCSV = (value) =>

      `"${String(value ?? "").replace(/"/g, '""')}"`;



    const csv =

      "\uFEFF" +

      [

        headers.map(escapeCSV).join(","),

        ...exportRows.map((record) =>

          headers.map((header) => escapeCSV(record[header])).join(",")

        ),

      ].join("\r\n");



    const url = URL.createObjectURL(

      new Blob([csv], { type: "text/csv;charset=utf-8;" })

    );

    const anchor = document.createElement("a");

    anchor.href = url;

    anchor.download = `HKVPY_Previously_Surveyed_Trees_${new Date().toISOString().slice(0, 10)}.csv`;

    anchor.click();

    URL.revokeObjectURL(url);

  };



  const downloadPDF = () => {

    const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a3" });

    const headers = exportRows.length

      ? Object.keys(exportRows[0])

      : ["S.No.", ...TABLE_COLUMNS.map(displayHeader)];



    pdf.setFontSize(13);

    pdf.text("HKVPY - Previously Surveyed Tree Data", 10, 12);

    pdf.setFontSize(8);

    pdf.text(`Records: ${filteredData.length}`, 10, 18);



    autoTable(pdf, {

      head: [headers],

      body: exportRows.map((record) =>

        headers.map((header) => String(record[header] ?? ""))

      ),

      startY: 23,

      theme: "grid",

      styles: { fontSize: 5, cellPadding: 1, overflow: "linebreak" },

      horizontalPageBreak: true,

      horizontalPageBreakRepeat: 1,

      showHead: "everyPage",

    });



    pdf.save(

      `HKVPY_Previously_Surveyed_Trees_${new Date().toISOString().slice(0, 10)}.pdf`

    );

  };



  const renderCell = (row, key) => {

    const value = displayValue(row, key);

    if (value === null || value === undefined || value === "") {

      return <span className="text-slate-400">—</span>;

    }



    const text = cellText(value);

    return (

      <span title={text} className="block max-w-[360px] truncate">

        {text}

      </span>

    );

  };



  return (
    <section className="flex h-full min-h-0 min-w-0 flex-col overflow-hidden rounded-xl bg-white">

      

      <div className="flex shrink-0 flex-col gap-3 border-b border-slate-200 p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4">

        <div className="flex min-w-0 items-center gap-3">

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">

            <i className="pi pi-history text-lg" />

          </span>

          <div className="min-w-0">

            <h2 className="truncate text-base font-bold text-slate-800 sm:text-lg">

              Surveyed Tree Data

            </h2>

          </div>

        </div>



        <div className="flex flex-wrap items-center gap-2">

          <span className="rounded-xl bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-800">

            {filteredData.length.toLocaleString("en-IN")} records

          </span>



          <div className="relative min-w-[160px] flex-1 sm:flex-none">

            <i className="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

            <input

              aria-label="Search previously surveyed trees"

              className="w-full rounded-xl border border-slate-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:w-56"

              placeholder="Search surveyed trees…"

              value={search}

              onChange={(event) => {

                setSearch(event.target.value);

                setFirst(0);

              }}

            />

          </div>



          <details className="relative">

            <summary className="cursor-pointer list-none rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700">

              <i className="pi pi-download mr-2" />

              Export ▾

            </summary>

            <div className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">

              <button type="button" className="block w-full px-4 py-3 text-left text-sm hover:bg-slate-50" onClick={downloadPDF}>

                <i className="pi pi-file-pdf mr-2 text-red-600" />PDF

              </button>

              <button type="button" className="block w-full px-4 py-3 text-left text-sm hover:bg-slate-50" onClick={downloadExcel}>

                <i className="pi pi-file-excel mr-2 text-emerald-600" />Excel

              </button>

              <button type="button" className="block w-full px-4 py-3 text-left text-sm hover:bg-slate-50" onClick={downloadCSV}>

                <i className="pi pi-file mr-2 text-blue-600" />CSV

              </button>

            </div>

          </details>

        </div>

      </div>



      {error && (

        <div role="alert" className="m-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">

          {error}

        </div>

      )}



      <div className="min-h-0 min-w-0 flex-1 overflow-hidden p-2 sm:p-3">

        <DataTable

          value={filteredData}

          dataKey="tree_id"

          loading={loading}

          paginator

          first={first}

          rows={rows}

          rowsPerPageOptions={[10, 25, 50, 100]}

          onPage={(event) => {

            setFirst(event.first);

            setRows(event.rows);

          }}

          scrollable

          scrollHeight="flex"

          stripedRows

          showGridlines

          size="small"

          removableSort

          emptyMessage={error ? "Surveyed records could not be loaded." : "No previously surveyed records match your search."}

          className="h-full min-h-0 flex flex-col text-sm"

          tableStyle={{ minWidth: `${Math.max(1200, (TABLE_COLUMNS.length + 1) * 150)}px` }}

          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} records"

          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"

        >

          <Column

            header="S.No."

            body={(_, options) => first + options.rowIndex + 1}

            style={{ width: "75px" }}

            frozen

          />

          {TABLE_COLUMNS.map((key) => (

            <Column

              key={key}

              field={key}

              header={displayHeader(key)}

              body={(row) => renderCell(row, key)}

              sortable

              style={{ minWidth: "150px" }}

            />

          ))}

        </DataTable>

      </div>
    </section>
  );
}
