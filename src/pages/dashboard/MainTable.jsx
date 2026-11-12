import { useEffect, useMemo, useState } from "react";

// Uses the application's configured proxy/base path.
const SURVEYED_DATA_API = "/treeapi/api_tree_survey_hkvpy/get_gdb_tree";

const preferredColumns = [
  "tree_id",
  "tree_name",
  "common_name",
  "Scientific_Name",
  "tree_species",
  "vegetation_type",
  "latitude",
  "longitude",
  "n_d_name",
  "n_t_name",
  "n_v_name",
  "surveyour_name",
  "created_user",
  "created_date",
];

const labelFor = (key) =>
  String(key)
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

const formatValue = (value) => {
  if (value === null || value === undefined || value === "") return "—";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
};

function getRecords(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.data?.data)) return payload.data.data;
  if (Array.isArray(payload?.records)) return payload.records;
  if (Array.isArray(payload?.result)) return payload.result;
  return [];
}

export default function MainTable() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const controller = new AbortController();

    async function loadSurveyedData() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(SURVEYED_DATA_API, {
          method: "GET",
          headers: { Accept: "application/json" },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Surveyed tree API request failed (${response.status})`);
        }

        const payload = await response.json();
        const rows = getRecords(payload);

        if (payload?.status && payload.status !== "success") {
          throw new Error(payload?.message || "The API returned an unsuccessful status.");
        }

        setRecords(rows.filter((row) => row && typeof row === "object"));
        if (!rows.length) {
          setError("The API responded, but no records were found in its data array.");
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Surveyed tree API error:", err);
          setError(
            `${err.message || "Unable to load surveyed tree data."} Check the /treeapi proxy and API/CORS settings.`
          );
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadSurveyedData();
    return () => controller.abort();
  }, []);

  // Build columns from every field present in the API response, not just a fixed subset.
  const columns = useMemo(() => {
    const keys = new Set();
    records.forEach((row) => Object.keys(row).forEach((key) => keys.add(key)));

    const allKeys = [...keys];
    return [
      ...preferredColumns.filter((key) => keys.has(key)),
      ...allKeys.filter((key) => !preferredColumns.includes(key)),
    ];
  }, [records]);

  const filteredRecords = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return records;

    return records.filter((row) =>
      Object.values(row).some((value) =>
        formatValue(value).toLowerCase().includes(query)
      )
    );
  }, [records, search]);

  const totalPages = Math.max(1, Math.ceil(filteredRecords.length / pageSize));
  const currentPage = Math.min(page, totalPages - 1);
  const pageRecords = filteredRecords.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize
  );

  useEffect(() => {
    setPage(0);
  }, [search, pageSize]);

  const downloadCSV = () => {
    const csvCell = (value) =>
      `"${String(value ?? "").replace(/"/g, '""')}"`;

    const rows = [
      ["S. No.", ...columns.map(labelFor)],
      ...filteredRecords.map((record, index) => [
        index + 1,
        ...columns.map((key) => formatValue(record[key])),
      ]),
    ];

    const csv =
      "\uFEFF" +
      rows.map((row) => row.map(csvCell).join(",")).join("\r\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "HKVPY_Surveyed_Tree_Data.csv";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  };

  const styles = {
    container: {
      width: "100%",
      minWidth: 0,
      padding: "16px",
      boxSizing: "border-box",
      color: "#172033",
      fontFamily: "Arial, sans-serif",
    },
    toolbar: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "10px",
      justifyContent: "space-between",
      marginBottom: "14px",
    },
    input: {
      minWidth: "220px",
      maxWidth: "420px",
      flex: "1 1 240px",
      padding: "10px 12px",
      border: "1px solid #cbd5e1",
      borderRadius: "6px",
      fontSize: "14px",
    },
    button: {
      padding: "10px 14px",
      border: "1px solid #cbd5e1",
      borderRadius: "6px",
      background: "#fff",
      cursor: "pointer",
      fontSize: "14px",
    },
    tableWrap: {
      width: "100%",
      overflow: "auto",
      border: "1px solid #e2e8f0",
      borderRadius: "8px",
      maxHeight: "68vh",
    },
    table: {
      borderCollapse: "separate",
      borderSpacing: 0,
      width: "max-content",
      minWidth: "100%",
      fontSize: "13px",
    },
    th: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      background: "#eff6ff",
      color: "#1e3a8a",
      textAlign: "left",
      whiteSpace: "nowrap",
      padding: "11px 12px",
      borderBottom: "1px solid #cbd5e1",
      borderRight: "1px solid #e2e8f0",
    },
    td: {
      padding: "10px 12px",
      borderBottom: "1px solid #e2e8f0",
      borderRight: "1px solid #f1f5f9",
      whiteSpace: "nowrap",
      maxWidth: "320px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    footer: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "10px",
      justifyContent: "space-between",
      paddingTop: "14px",
    },
    message: {
      padding: "14px",
      borderRadius: "6px",
      background: "#f8fafc",
      marginBottom: "12px",
    },
  };

  return (
    <section style={styles.container}>
      <div style={styles.toolbar}>
        <div>
          <h2 style={{ margin: 0, fontSize: "20px" }}>Surveyed Tree Data</h2>
          <div style={{ marginTop: 5, color: "#64748b", fontSize: 13 }}>
            {loading
              ? "Loading records…"
              : `${filteredRecords.length} of ${records.length} records · ${columns.length} fields`}
          </div>
        </div>

        <input
          aria-label="Search all surveyed tree fields"
          style={styles.input}
          type="search"
          placeholder="Search any field…"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <button
          type="button"
          style={styles.button}
          onClick={downloadCSV}
          disabled={loading || filteredRecords.length === 0}
        >
          Export CSV
        </button>
      </div>

      {error && <div role="alert" style={styles.message}>{error}</div>}

      {loading ? (
        <div style={styles.message}>Loading surveyed tree records…</div>
      ) : records.length === 0 ? (
        <div style={styles.message}>No surveyed tree records are available.</div>
      ) : (
        <>
          <div style={styles.tableWrap}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>S. No.</th>
                  {columns.map((key) => (
                    <th key={key} title={key} style={styles.th}>
                      {labelFor(key)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pageRecords.length === 0 ? (
                  <tr>
                    <td style={styles.td} colSpan={columns.length + 1}>
                      No records match your search.
                    </td>
                  </tr>
                ) : (
                  pageRecords.map((record, rowIndex) => (
                    <tr
                      key={`${record.tree_id ?? "tree"}-${currentPage * pageSize + rowIndex}`}
                      style={{
                        background: rowIndex % 2 === 0 ? "#ffffff" : "#f8fafc",
                      }}
                    >
                      <td style={styles.td}>
                        {currentPage * pageSize + rowIndex + 1}
                      </td>
                      {columns.map((key) => (
                        <td key={key} style={styles.td} title={formatValue(record[key])}>
                          {formatValue(record[key])}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div style={styles.footer}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <label htmlFor="main-table-page-size">Rows per page</label>
              <select
                id="main-table-page-size"
                value={pageSize}
                onChange={(event) => setPageSize(Number(event.target.value))}
                style={{ padding: "7px", borderRadius: 5, border: "1px solid #cbd5e1" }}
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "#64748b", fontSize: 13 }}>
                Page {currentPage + 1} of {totalPages}
              </span>
              <button
                type="button"
                style={styles.button}
                onClick={() => setPage((value) => Math.max(0, value - 1))}
                disabled={currentPage === 0}
              >
                Previous
              </button>
              <button
                type="button"
                style={styles.button}
                onClick={() => setPage((value) => Math.min(totalPages - 1, value + 1))}
                disabled={currentPage >= totalPages - 1}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
