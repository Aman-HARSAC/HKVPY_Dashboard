import { useMemo } from "react";

const clean = (value) => String(value ?? "").trim();

export default function Graph({ data = [], loading = false }) {
  const speciesData = useMemo(() => {
    const counts = new Map();

    data.forEach((tree) => {
      const species = clean(tree?.tree_species) || "Unknown species";
      counts.set(species, (counts.get(species) || 0) + 1);
    });

    return [...counts.entries()]
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
      .slice(0, 10);
  }, [data]);

  const max = Math.max(1, ...speciesData.map((item) => item.count));
  const totalSpecies = new Set(data.map((tree) => clean(tree?.tree_species)).filter(Boolean)).size;

  return (
    <section className="flex h-full min-h-[280px] min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-4 py-3 sm:px-5">
        <div>
          <h2 className="text-base font-bold text-slate-800 sm:text-lg">Tree Species Distribution</h2>
          <p className="mt-0.5 text-xs text-slate-500">Top 10 tree categories by number of records</p>
        </div>
        <div className="rounded-xl bg-emerald-50 px-3 py-2">
          <p className="text-[10px] font-medium text-emerald-700 sm:text-xs">Species categories</p>
          <p className="text-lg font-bold text-emerald-800">{totalSpecies.toLocaleString("en-IN")}</p>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-auto p-4 sm:p-5">
        {loading ? (
          <div className="flex h-48 items-center justify-center gap-2 text-sm text-slate-500">
            <i className="pi pi-spin pi-spinner text-emerald-600" /> Loading chart data…
          </div>
        ) : speciesData.length === 0 ? (
          <div className="flex h-48 items-center justify-center text-sm text-slate-500">
            No tree species data available for the current filters.
          </div>
        ) : (
          <div className="space-y-4">
            {speciesData.map((item, index) => (
              <div key={item.name} className="grid grid-cols-[minmax(90px,155px)_minmax(0,1fr)_42px] items-center gap-2 sm:grid-cols-[minmax(130px,220px)_minmax(0,1fr)_52px] sm:gap-3">
                <div className="min-w-0">
                  <p title={item.name} className="truncate text-xs font-medium text-slate-700 sm:text-sm">
                    {item.name}
                  </p>
                </div>
                <div className="h-6 overflow-hidden rounded-md bg-slate-100 sm:h-7">
                  <div
                    className={`flex h-full min-w-[3px] items-center rounded-md px-2 text-[10px] font-semibold text-white transition-all duration-500 ${index === 0 ? "bg-emerald-600" : index < 3 ? "bg-blue-500" : "bg-sky-400"}`}
                    style={{ width: `${Math.max(2, (item.count / max) * 100)}%` }}
                    title={`${item.name}: ${item.count} trees`}
                  >
                    {(item.count / max) > 0.2 ? item.count.toLocaleString("en-IN") : ""}
                  </div>
                </div>
                <p className="text-right text-xs font-bold tabular-nums text-slate-700 sm:text-sm">
                  {item.count.toLocaleString("en-IN")}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-slate-100 bg-slate-50 px-4 py-2.5 text-xs text-slate-500 sm:px-5">
        Showing {speciesData.length} of {totalSpecies} categories · {data.length.toLocaleString("en-IN")} tree records
      </div>
    </section>
  );
}
