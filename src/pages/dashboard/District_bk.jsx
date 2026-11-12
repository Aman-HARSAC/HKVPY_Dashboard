import React, { useMemo, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function TreeTable({
  data,
  loading,
  totalRecords,
  page,
  onPageChange,
  exportData,
}) {
  const [globalFilter, setGlobalFilter] = useState("");

  // --------------------------------------------------
  // Common value template
  // --------------------------------------------------
  const valueTemplate = (rowData, options) => {
    const value = rowData?.[options.field];

    if (value === null || value === undefined || value === "") {
      return <span className="text-gray-400">—</span>;
    }

    return (
      <span className="block max-w-[220px] truncate" title={String(value)}>
        {String(value)}
      </span>
    );
  };

  // --------------------------------------------------
  // Status
  // --------------------------------------------------
  const statusTemplate = (rowData) => {
    const status = String(rowData?.survey_status || "").trim();

    let className =
      "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold";

    if (status.toLowerCase() === "verified") {
      className += " bg-green-100 text-green-700";
    } else if (status.toLowerCase() === "approved") {
      className += " bg-blue-100 text-blue-700";
    } else if (status.toLowerCase() === "pending") {
      className += " bg-orange-100 text-orange-700";
    } else if (status.toLowerCase() === "rejected") {
      className += " bg-red-100 text-red-700";
    } else {
      className += " bg-gray-100 text-gray-700";
    }

    return <span className={className}>{status || "—"}</span>;
  };

  // --------------------------------------------------
  // Date Template
  // --------------------------------------------------
  const dateTemplate = (rowData, options) => {
    const value = rowData?.[options.field];

    if (!value) {
      return <span className="text-gray-400">—</span>;
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return String(value);
    }

    return date.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // --------------------------------------------------
  // Number Template
  // --------------------------------------------------
  const numberTemplate = (rowData, options) => {
    const value = rowData?.[options.field];

    if (value === null || value === undefined || value === "") {
      return <span className="text-gray-400">—</span>;
    }

    const number = Number(value);

    if (!Number.isFinite(number)) {
      return String(value);
    }

    return number.toLocaleString("en-IN", {
      maximumFractionDigits: 2,
    });
  };

  // --------------------------------------------------
  // Image Template
  // --------------------------------------------------
  const imageTemplate = (rowData, options) => {
    const imagePath = rowData?.[options.field];

    if (!imagePath) {
      return <span className="text-gray-400">—</span>;
    }

    return (
      <button
        type="button"
        className="px-3 py-1 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 font-medium text-sm"
        onClick={() => {
          console.log("Image:", imagePath);

          // If your API domain is required:
          // window.open(`${API_BASE_URL}${imagePath}`, "_blank");

          window.open(imagePath, "_blank");
        }}
      >
        <i className="pi pi-image mr-2" />
        View
      </button>
    );
  };

  // --------------------------------------------------
  // Action
  // --------------------------------------------------
  const actionTemplate = (rowData) => {
    return (
      <Button
        label="View"
        icon="pi pi-eye"
        size="small"
        severity="info"
        outlined
        onClick={() => {
          console.log("Selected Tree:", rowData);
        }}
      />
    );
  };

  // --------------------------------------------------
  // Global Filter Fields
  // --------------------------------------------------
  const globalFilterFields = useMemo(
    () => [
      "tree_id",
      "tree_species",
      "land_type",
      "bark_type",
      "branch_damage_level",
      "canopy_density",
      "canopy_spread_class",
      "crown_shape",
      "leaf_shape",
      "leaf_type",
      "tree_health",
      "tree_health_condition",
      "ownership_status",
      "phenological_phase",
      "soil_moisture_condition",
      "stem_type",
      "number_of_stems",
      "pest_disease_presence",
      "deadwood_percentage_class",
      "regeneration_status",
      "n_d_name",
      "n_t_name",
      "n_v_name",
      "survey_status",
      "killa_number",
      "jamabandi_number",
      "khasra_number",
      "murabba_number",
      "tree_age",
      "created_by",
      "modified_by",
      "pest_type",
    ],
    [],
  );

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
          {/* Title */}
          <div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <i className="pi pi-sitemap text-green-600 text-lg" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Tree Survey Data
                </h2>

                <p className="text-xs text-gray-500">
                  Complete tree survey records
                </p>
              </div>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => setShowDownloadMenu((prev) => !prev)}
              className="
    flex items-center gap-2
    px-4 py-2
    rounded-lg
    bg-green-600
    hover:bg-green-700
    text-white
    text-sm
    font-semibold
    shadow-sm
    transition-all
    duration-200
  "
            >
              <i className="pi pi-download" />
              Download
              {/* <i className="pi pi-chevron-down text-xs" /> */}
            </button>

            {/* Total Records */}
            <div
              className="
    flex
    items-center
    justify-center
    px-5
    py-2
    rounded-xl
    bg-green-50
    border
    border-green-100
    min-w-[130px]
  "
            >
              <div className="text-center">
                <p className="text-[11px] text-gray-500 leading-tight">
                  Total Records
                </p>

                <span className="block font-bold text-green-700 text-lg leading-tight mt-1">
                  {Number(totalRecords || 0).toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-80">
              <i
                className="
      pi pi-search
      absolute
      left-3
      top-1/2
      -translate-y-1/2
      text-gray-400
      z-10
    "
              />

              <InputText
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
                placeholder="Search tree, district, village..."
                className="
      w-full
      h-10
      pl-10
      pr-10
      rounded-xl
      border
      border-gray-200
      bg-white
      text-sm
      shadow-sm
      focus:border-green-500
      focus:ring-2
      focus:ring-green-100
    "
              />

              {globalFilter && (
                <button
                  type="button"
                  onClick={() => setGlobalFilter("")}
                  className="
        absolute
        right-2
        top-1/2
        -translate-y-1/2
        w-7
        h-7
        flex
        items-center
        justify-center
        rounded-full
        text-gray-400
        hover:text-red-600
        hover:bg-red-50
        transition
      "
                  title="Clear search"
                >
                  <i className="pi pi-times text-xs" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* =====================================================
            INFORMATION BAR
        ===================================================== */}
        {/* <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-500">

          <span className="flex items-center gap-1">
            <i className="pi pi-info-circle text-blue-500" />
            Use horizontal scroll to view all columns
          </span>

          <span className="hidden sm:inline">
            •
          </span>

          <span>
            Showing 10 records per page
          </span>

          <span className="hidden sm:inline">
            •
          </span>

          <span>
            90 API fields
          </span>
        </div> */}
      </div>

      {/* =====================================================
          TABLE
      ===================================================== */}
      <div className="p-3">
        <DataTable
          value={data || []}
          paginator
          rows={10}
          loading={loading}
          totalRecords={totalRecords}
          lazy
          first={(page - 1) * 10}
          onPage={(e) => {
            onPageChange(e.page + 1);
          }}
          globalFilter={globalFilter}
          globalFilterFields={globalFilterFields}
          scrollable
          scrollHeight="600px"
          showGridlines
          stripedRows
          size="small"
          removableSort
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} records"
          emptyMessage={
            <div className="flex flex-col items-center justify-center py-12">
              <i className="pi pi-inbox text-4xl text-gray-300 mb-3" />

              <p className="text-gray-500 font-medium">No tree records found</p>

              <p className="text-gray-400 text-sm">
                Try changing your filters or search.
              </p>
            </div>
          }
          loadingIcon="pi pi-spin pi-spinner"
          tableStyle={{
            minWidth: "2800px",
          }}
        >
          {/* =================================================
              S.NO
          ================================================= */}
          <Column
            header="S.No."
            body={(rowData, options) => page * 0 + options.rowIndex + 1}
            frozen
            alignFrozen="left"
            style={{
              width: "80px",
              minWidth: "80px",
            }}
          />
          {/* =================================================
              TREE BASIC INFORMATION
          ================================================= */}

          <Column
            field="tree_id"
            header="Tree ID"
            frozen
            alignFrozen="left"
            sortable
            style={{
              width: "100px",
              minWidth: "100px",
            }}
          />

          <Column
            field="tree_species_id"
            header="Species ID"
            body={valueTemplate}
          />

          <Column
            field="tree_species"
            header="Tree Species"
            body={valueTemplate}
            sortable
          />

          <Column
            field="land_type_id"
            header="Land Type ID"
            body={valueTemplate}
          />

          <Column field="land_type" header="Land Type" body={valueTemplate} />

          {/* =================================================
              BARK
          ================================================= */}

          <Column
            field="bark_type_id"
            header="Bark Type ID"
            body={valueTemplate}
          />

          <Column field="bark_type" header="Bark Type" body={valueTemplate} />

          <Column
            field="branch_damage_level_id"
            header="Branch Damage ID"
            body={valueTemplate}
          />

          <Column
            field="branch_damage_level"
            header="Branch Damage"
            body={valueTemplate}
          />

          {/* =================================================
              CANOPY
          ================================================= */}

          <Column
            field="canopy_density_id"
            header="Canopy Density ID"
            body={valueTemplate}
          />

          <Column
            field="canopy_density"
            header="Canopy Density"
            body={valueTemplate}
          />

          <Column
            field="canopy_spread_class_id"
            header="Canopy Spread ID"
            body={valueTemplate}
          />

          <Column
            field="canopy_spread_class"
            header="Canopy Spread"
            body={valueTemplate}
          />

          {/* =================================================
              CROWN
          ================================================= */}

          <Column
            field="crown_shape_id"
            header="Crown Shape ID"
            body={valueTemplate}
          />

          <Column
            field="crown_shape"
            header="Crown Shape"
            body={valueTemplate}
          />

          {/* =================================================
              LEAF
          ================================================= */}

          <Column
            field="leaf_shape_id"
            header="Leaf Shape ID"
            body={valueTemplate}
          />

          <Column field="leaf_shape" header="Leaf Shape" body={valueTemplate} />

          <Column
            field="leaf_type_id"
            header="Leaf Type ID"
            body={valueTemplate}
          />

          <Column field="leaf_type" header="Leaf Type" body={valueTemplate} />

          {/* =================================================
              HEALTH
          ================================================= */}

          <Column
            field="tree_health_id"
            header="Health ID"
            body={valueTemplate}
          />

          <Column
            field="tree_health"
            header="Tree Health"
            body={valueTemplate}
          />

          <Column
            field="tree_health_condition_id"
            header="Health Condition ID"
            body={valueTemplate}
          />

          <Column
            field="tree_health_condition"
            header="Health Condition"
            body={valueTemplate}
          />

          {/* =================================================
              OWNERSHIP
          ================================================= */}

          <Column
            field="ownership_status_id"
            header="Ownership ID"
            body={valueTemplate}
          />

          <Column
            field="ownership_status"
            header="Ownership Status"
            body={valueTemplate}
          />

          {/* =================================================
              PHENOLOGY
          ================================================= */}

          <Column
            field="phenological_phase_id"
            header="Phenological Phase ID"
            body={valueTemplate}
          />

          <Column
            field="phenological_phase"
            header="Phenological Phase"
            body={valueTemplate}
          />

          {/* =================================================
              SOIL
          ================================================= */}

          <Column
            field="soil_moisture_condition_id"
            header="Soil Moisture ID"
            body={valueTemplate}
          />

          <Column
            field="soil_moisture_condition"
            header="Soil Moisture"
            body={valueTemplate}
          />

          {/* =================================================
              STEM
          ================================================= */}

          <Column
            field="stem_type_id"
            header="Stem Type ID"
            body={valueTemplate}
          />

          <Column field="stem_type" header="Stem Type" body={valueTemplate} />

          <Column
            field="number_of_stems_id"
            header="Number of Stems ID"
            body={valueTemplate}
          />

          <Column
            field="number_of_stems"
            header="Number of Stems"
            body={valueTemplate}
          />

          {/* =================================================
              PEST / DISEASE
          ================================================= */}

          <Column
            field="pest_disease_presence_id"
            header="Pest/Disease ID"
            body={valueTemplate}
          />

          <Column
            field="pest_disease_presence"
            header="Pest/Disease Presence"
            body={valueTemplate}
          />

          <Column
            field="deadwood_percentage_class_id"
            header="Deadwood Class ID"
            body={valueTemplate}
          />

          <Column
            field="deadwood_percentage_class"
            header="Deadwood Percentage"
            body={valueTemplate}
          />

          <Column
            field="regeneration_status_id"
            header="Regeneration ID"
            body={valueTemplate}
          />

          <Column
            field="regeneration_status"
            header="Regeneration Status"
            body={valueTemplate}
          />

          {/* =================================================
              LOCATION
          ================================================= */}

          <Column
            field="n_d_code"
            header="District Code"
            body={valueTemplate}
          />

          <Column field="n_d_name" header="District" body={valueTemplate} />

          <Column field="n_t_code" header="Tehsil Code" body={valueTemplate} />

          <Column field="n_t_name" header="Tehsil" body={valueTemplate} />

          <Column field="n_v_code" header="Village Code" body={valueTemplate} />

          <Column field="n_v_name" header="Village" body={valueTemplate} />

          {/* =================================================
              BIOMASS
          ================================================= */}

          <Column field="biomass_id" header="Biomass ID" body={valueTemplate} />

          <Column
            field="coefficient_a"
            header="Coefficient A"
            body={numberTemplate}
          />

          <Column
            field="coefficient_b"
            header="Coefficient B"
            body={numberTemplate}
          />

          {/* =================================================
              STATUS
          ================================================= */}

          <Column field="status_id" header="Status ID" body={valueTemplate} />

          <Column
            field="survey_status"
            header="Survey Status"
            body={statusTemplate}
          />

          {/* =================================================
              COORDINATES
          ================================================= */}

          <Column field="latitude" header="Latitude" body={numberTemplate} />

          <Column field="longitude" header="Longitude" body={numberTemplate} />

          <Column
            field="elevation_from_gps"
            header="Elevation GPS"
            body={numberTemplate}
          />

          {/* =================================================
              LAND RECORD
          ================================================= */}

          <Column
            field="killa_number"
            header="Killa Number"
            body={valueTemplate}
          />

          <Column
            field="jamabandi_number"
            header="Jamabandi Number"
            body={valueTemplate}
          />

          <Column
            field="khasra_number"
            header="Khasra Number"
            body={valueTemplate}
          />

          <Column
            field="murabba_number"
            header="Murabba Number"
            body={valueTemplate}
          />

          {/* =================================================
              TREE MEASUREMENTS
          ================================================= */}

          <Column
            field="tree_height"
            header="Tree Height"
            body={numberTemplate}
          />

          <Column field="dbh" header="DBH" body={numberTemplate} />

          <Column field="tree_age" header="Tree Age" body={numberTemplate} />

          <Column
            field="calculated_height"
            header="Calculated Height"
            body={numberTemplate}
          />

          <Column field="spad" header="SPAD" body={numberTemplate} />

          <Column field="biomass" header="Biomass" body={numberTemplate} />

          <Column
            field="carbon_sequestration"
            header="Carbon Sequestration"
            body={numberTemplate}
          />

          {/* =================================================
              CANOPY RADIUS
          ================================================= */}

          <Column
            field="canopy_radius_r1"
            header="Canopy Radius R1"
            body={numberTemplate}
          />

          <Column
            field="canopy_radius_r2"
            header="Canopy Radius R2"
            body={numberTemplate}
          />

          <Column
            field="canopy_radius_r3"
            header="Canopy Radius R3"
            body={numberTemplate}
          />

          <Column
            field="canopy_radius"
            header="Canopy Radius"
            body={numberTemplate}
          />

          {/* =================================================
              IMAGES
          ================================================= */}

          <Column
            field="small_leaf_img"
            header="Small Leaf"
            body={imageTemplate}
          />

          <Column
            field="medium_leaf_img"
            header="Medium Leaf"
            body={imageTemplate}
          />

          <Column
            field="large_leaf_img"
            header="Large Leaf"
            body={imageTemplate}
          />

          <Column field="stem_image" header="Stem Image" body={imageTemplate} />

          <Column
            field="stem_count_image"
            header="Stem Count Image"
            body={imageTemplate}
          />

          <Column field="full_image" header="Full Image" body={imageTemplate} />

          {/* =================================================
              PEST
          ================================================= */}

          <Column field="pest_type" header="Pest Type" body={valueTemplate} />

          {/* =================================================
              CREATED / MODIFIED
          ================================================= */}

          <Column field="created_by" header="Created By" body={valueTemplate} />

          <Column
            field="created_date"
            header="Created Date"
            body={dateTemplate}
          />

          <Column
            field="modified_by"
            header="Modified By"
            body={valueTemplate}
          />

          <Column
            field="modified_date"
            header="Modified Date"
            body={dateTemplate}
          />

          {/* =================================================
              OTHER VALUES
          ================================================= */}

          <Column
            field="land_use_type_others"
            header="Land Use Others"
            body={valueTemplate}
          />

          <Column
            field="soil_condition_others"
            header="Soil Condition Others"
            body={valueTemplate}
          />

          <Column
            field="ownership_others"
            header="Ownership Others"
            body={valueTemplate}
          />

          <Column
            field="bark_type_others"
            header="Bark Type Others"
            body={valueTemplate}
          />

          <Column
            field="leaf_type_others"
            header="Leaf Type Others"
            body={valueTemplate}
          />

          <Column field="bark_image" header="Bark Image" body={imageTemplate} />

          <Column
            field="leaf_shape_others"
            header="Leaf Shape Others"
            body={valueTemplate}
          />

          <Column
            field="crown_shape_others"
            header="Crown Shape Others"
            body={valueTemplate}
          />

          <Column
            field="stem_type_others"
            header="Stem Type Others"
            body={valueTemplate}
          />

          <Column field="username" header="Username" body={valueTemplate} />

          {/* =================================================
              ACTION
          ================================================= */}

          {/* <Column
            header="Action"
            frozen
            alignFrozen="right"
            body={actionTemplate}
            style={{
              width: "110px",
              minWidth: "110px",
            }}
          /> */}
        </DataTable>
      </div>
    </div>
  );
}
