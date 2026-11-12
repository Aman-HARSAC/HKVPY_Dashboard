import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export default function BlockTable({ district, data, loading, onBack, onBlockSelect }) {
  if (!district) return null;

  const blockTemplate = (rowData) => {
    return (
      <span className="text-blue-600 underline cursor-pointer hover:text-blue-800" onClick={() => onBlockSelect(rowData.block)}>
        {rowData.block}
      </span>
    );
  };

  return (
    <div className=" p-2 rounded-xl max-h-80">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Blocks-wise Count: District-{district}</h1>
        <Button icon="pi pi-arrow-left" label="Back" className="p-button-text p-button-sm" onClick={onBack} />
      </div>

      <DataTable value={data} loading={loading} paginator rows={5} emptyMessage="No block data available">
        <Column field="block" header="Block" body={blockTemplate} />
        <Column field="family_count" header="Family Count" />
        <Column field="member_count" header="Member Count" />
      </DataTable>
    </div>
  );
}
