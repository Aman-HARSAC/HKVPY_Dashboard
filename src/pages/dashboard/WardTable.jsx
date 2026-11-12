import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export default function WardTable({ block, data, loading, onBack }) {
  if (!block) return null;

  return (
    <div className="p-2 rounded-xl max-h-80">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Ward-wise Count: Block - {block}</h1>

        {/* <button onClick={onBack} className="text-blue-500">
          ← Back
        </button> */}
        <Button icon="pi pi-arrow-left" label="Back" className="p-button-text p-button-sm" onClick={onBack} />
      </div>

      <DataTable value={data} loading={loading} paginator rows={5}>
        <Column field="wardvillage" header="Ward/Village" />
        <Column field="family_count" header="Tree Count" />
        <Column field="member_count" header="Member Count" />
      </DataTable>
    </div>
  );
}
