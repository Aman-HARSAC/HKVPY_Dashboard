import React, { useMemo, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const PREFERRED_FIELDS = [
  "tree_id","tree_species", "land_type", "bark_type", "branch_damage_level",
  "canopy_density", "canopy_spread_class", "crown_shape", "leaf_shape",
  "leaf_type", "tree_health", "tree_health_condition", "ownership_status",
  "phenological_phase", "soil_moisture_condition", "stem_type", "number_of_stems",
  "pest_disease_presence", "deadwood_percentage_class", "regeneration_status",
  "n_d_name", "n_t_name", "n_v_name", "survey_status", "latitude", "longitude",
  "elevation_from_gps", "killa_number", "jamabandi_number", "khasra_number",
  "murabba_number", "tree_height", "dbh", "tree_age", "calculated_height",
  "spad", "biomass", "carbon_sequestration", "canopy_radius_r1",
  "canopy_radius_r2", "canopy_radius_r3", "canopy_radius", "small_leaf_img",
  "medium_leaf_img", "large_leaf_img", "stem_image", "stem_count_image",
  "full_image", "pest_type", "created_by", "created_date", "modified_by",
  "modified_date", "land_use_type_others", "soil_condition_others",
  "ownership_others", "bark_type_others", "leaf_type_others", "bark_image",
  "leaf_shape_others", "crown_shape_others", "stem_type_others", "username"
];

const LABEL_OVERRIDES = {
  tree_id: "Tree ID",
  tree_species: "Tree Species",
  land_type: "Land Type",
  n_d_name: "District",
  n_t_name: "Tehsil",
  n_v_name: "Village",
  dbh: "DBH",
  spad: "SPAD",
  created_by: "Created By",
  created_date: "Created Date",
  modified_by: "Modified By",
  modified_date: "Modified Date",
  small_leaf_img: "Small Leaf Image",
  medium_leaf_img: "Medium Leaf Image",
  large_leaf_img: "Large Leaf Image",
  stem_count_image: "Stem Count Image",
  full_image: "Full Image"
};

const labelFor = (field) => LABEL_OVERRIDES[field] ||
  field.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

const valueText = (value) => value == null ? "" :
  typeof value === "object" ? JSON.stringify(value) : String(value);

// Hide all identifier fields and administrative codes from the table and exports.
// tree_id may still be used internally as DataTable's row key.
const isHiddenField = (field) => {
  const normalized = String(field ?? "")
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .toLowerCase()
    .replace(/[\s-]+/g, "_");

  // Hide ID fields except Tree ID
  if (
    normalized !== "tree_id" &&
    (normalized === "id" || /(^|_)id$/.test(normalized))
  ) {
    return true;
  }

  const compact = normalized.replace(/[^a-z0-9]/g, "");
  const administrativeCodeFields = new Set([
    "ndcode",
    "ntcode",
    "nvcode",
    "districtcode",
    "tehsilcode",
    "villagecode",
    "districtidcode",
    "tehsilidcode",
    "villageidcode"
  ]);

  return administrativeCodeFields.has(compact);
};

const imageFields = new Set([
  "small_leaf_img", "medium_leaf_img", "large_leaf_img", "stem_image",
  "stem_count_image", "full_image", "bark_image"
]);

const resolveImageUrl = (value) => {
  const path = String(value ?? "").trim();
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;
  return `https://hsac.org.in${path.startsWith("/") ? "" : "/"}${path}`;
};

export default function TreeTable({ data = [], loading = false, totalRecords, exportData }) {
  const [search, setSearch] = useState("");
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [selectedImage, setSelectedImage] = useState(null);

  const source = Array.isArray(exportData) && exportData.length
    ? exportData
    : Array.isArray(data) ? data : [];

  const fields = useMemo(() => {
    const present = new Set(source.flatMap((row) => Object.keys(row || {})));
    const visible = [...present].filter((field) => !isHiddenField(field));
    return [
      ...PREFERRED_FIELDS.filter((field) => present.has(field) && !isHiddenField(field)),
      ...visible.filter((field) => !PREFERRED_FIELDS.includes(field)).sort()
    ];
  }, [source]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return source;
    return source.filter((row) => fields.some((field) =>
      valueText(row?.[field]).toLowerCase().includes(query)
    ));
  }, [source, fields, search]);

  const exportRows = useMemo(() => filtered.map((row, index) => {
    const result = { "S.No.": index + 1 };
    fields.forEach((field) => { result[labelFor(field)] = valueText(row?.[field]); });
    return result;
  }), [filtered, fields]);

  const exportExcel = () => {
    if (!exportRows.length) return;
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(exportRows);
    worksheet["!cols"] = Object.keys(exportRows[0]).map((key) => ({
      wch: Math.min(35, Math.max(12, key.length + 2))
    }));
    XLSX.utils.book_append_sheet(workbook, worksheet, "Tree Survey Data");
    XLSX.writeFile(workbook, `HKVPY_Tree_Survey_${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  const exportCSV = () => {
    if (!exportRows.length) return;
    const headers = Object.keys(exportRows[0]);
    const escapeCSV = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;
    const csv = "\uFEFF" + [
      headers.map(escapeCSV).join(","),
      ...exportRows.map((row) => headers.map((header) => escapeCSV(row[header])).join(","))
    ].join("\r\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `HKVPY_Tree_Survey_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const exportPDF = () => {
    if (!exportRows.length) return;
    const headers = Object.keys(exportRows[0]);
    const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a3" });
    pdf.setFontSize(13);
    pdf.text("HKVPY - Complete Tree Survey Data", 8, 10);
    pdf.setFontSize(7);
    pdf.text(`Records: ${exportRows.length} | Visible fields: ${fields.length}`, 8, 16);
    autoTable(pdf, {
      head: [headers],
      body: exportRows.map((row) => headers.map((header) => row[header])),
      startY: 20,
      theme: "grid",
      styles: { fontSize: 4, cellPadding: 1, overflow: "linebreak" },
      headStyles: { fontSize: 4, fontStyle: "bold" },
      horizontalPageBreak: true,
      horizontalPageBreakRepeat: 1,
      showHead: "everyPage",
      margin: { top: 20, left: 5, right: 5, bottom: 8 }
    });
    pdf.save(`HKVPY_Tree_Survey_${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  const cellBody = (row, field) => {
    const value = row?.[field];
    if (value == null || value === "") return <span className="text-slate-300">—</span>;
    if (imageFields.has(field)) {
      return (
        <button
          type="button"
          title={`View ${labelFor(field)}`}
          aria-label={`View ${labelFor(field)}`}
          onClick={() => setSelectedImage({ title: labelFor(field), url: resolveImageUrl(value), path: valueText(value) })}
          className="inline-flex h-8 w-9 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-blue-700 transition hover:border-blue-300 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <i className="pi pi-image text-lg" />
        </button>
      );
    }
    return <span title={valueText(value)} className="block max-w-[260px] truncate">{valueText(value)}</span>;
  };

  return (
    <section className="flex h-full min-h-0 min-w-0 flex-col overflow-hidden bg-white">
      <div className="flex shrink-0 flex-col gap-3 border-b border-slate-200 p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700"><i className="pi pi-sitemap text-lg" /></span>
          <div className="min-w-0">
            <h2 className="truncate text-base font-bold text-slate-800 sm:text-lg">Tree Survey Data</h2>
            <p className="text-xs text-slate-500">Survey fields · searchable and exportable</p>
          </div>
        </div>
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <span className="rounded-xl bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-800">
            {filtered.length.toLocaleString("en-IN")} records · {fields.length} fields
          </span>
          <div className="relative min-w-[150px] flex-1 sm:flex-none">
            <i className="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input aria-label="Search visible tree fields" className="w-full rounded-xl border border-slate-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:w-56" placeholder="Search visible fields…" value={search} onChange={(event) => { setSearch(event.target.value); setFirst(0); }} />
          </div>
          <details className="relative">
            <summary className="cursor-pointer list-none rounded-xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700"><i className="pi pi-download mr-2" />Export ▾</summary>
            <div className="absolute right-0 z-[100] mt-2 w-44 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
              <button type="button" onClick={exportPDF} className="block w-full px-4 py-3 text-left text-sm hover:bg-slate-50"><i className="pi pi-file-pdf mr-2 text-red-600" />PDF</button>
              <button type="button" onClick={exportExcel} className="block w-full px-4 py-3 text-left text-sm hover:bg-slate-50"><i className="pi pi-file-excel mr-2 text-emerald-600" />Excel</button>
              <button type="button" onClick={exportCSV} className="block w-full px-4 py-3 text-left text-sm hover:bg-slate-50"><i className="pi pi-file mr-2 text-blue-600" />CSV</button>
            </div>
          </details>
        </div>
      </div>

      <div className="min-h-0 min-w-0 flex-1 overflow-hidden p-2 sm:p-3">
        <DataTable
          value={filtered}
          dataKey="tree_id"
          loading={loading}
          paginator
          first={first}
          rows={rows}
          rowsPerPageOptions={[10, 25, 50, 100]}
          onPage={(event) => { setFirst(event.first); setRows(event.rows); }}
          scrollable
          scrollHeight="flex"
          stripedRows
          showGridlines
          size="small"
          removableSort
          emptyMessage="No tree records match your search."
          className="h-full text-sm"
          tableStyle={{ minWidth: "1800px" }}
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} records"
          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
        >
          <Column header="S.No." body={(_, options) => first + options.rowIndex + 1} style={{ width: "75px", minWidth: "75px" }} frozen />
          {fields.map((field) => (
            <Column
              key={field}
              field={field}
              header={labelFor(field)}
              body={(row) => cellBody(row, field)}
              sortable
              style={{ minWidth: imageFields.has(field) ? "190px" : field === "tree_species" ? "250px" : "145px" }}
            />
          ))}
        </DataTable>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-sm sm:p-6" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedImage(null); }}>
          <section role="dialog" aria-modal="true" aria-labelledby="tree-image-modal-title" className="relative flex max-h-[92dvh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-200 px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <h3 id="tree-image-modal-title" className="truncate text-base font-bold text-slate-800 sm:text-lg">{selectedImage.title}</h3>
                <p className="truncate text-xs text-slate-500">{selectedImage.path}</p>
              </div>
              <button type="button" onClick={() => setSelectedImage(null)} aria-label="Close image preview" title="Close" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"><i className="pi pi-times text-lg" /></button>
            </div>
            <div className="flex min-h-[220px] min-w-0 flex-1 items-center justify-center overflow-auto bg-slate-50 p-3 sm:p-6">
              <img src={selectedImage.url} alt={selectedImage.title} className="max-h-[70dvh] max-w-full rounded-lg object-contain" onError={(event) => { event.currentTarget.style.display = "none"; const message = event.currentTarget.parentElement?.querySelector("[data-image-not-found]"); if (message) message.style.display = "block"; }} onLoad={(event) => { event.currentTarget.style.display = "block"; const message = event.currentTarget.parentElement?.querySelector("[data-image-not-found]"); if (message) message.style.display = "none"; }} />
              <div data-image-not-found role="alert" className="hidden max-w-xl rounded-xl border-2 border-red-500 bg-red-50 px-5 py-4 text-center text-sm font-semibold text-red-700 shadow-sm">
                <i className="pi pi-exclamation-triangle mb-2 block text-2xl text-red-600" />
                <p className="text-base">Image not found in the folder.</p>
                <p className="mt-1 font-normal">The image file may be missing or the image path may be incorrect.</p>
                <p className="mt-2 break-all rounded-md bg-white/80 px-2 py-1 text-xs font-normal text-red-600">{selectedImage.path}</p>
              </div>
            </div>
            <div className="flex shrink-0 justify-end border-t border-slate-100 px-4 py-3">
              <button type="button" onClick={() => setSelectedImage(null)} className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">Close</button>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
