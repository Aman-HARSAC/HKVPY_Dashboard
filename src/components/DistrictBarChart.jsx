import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function TreeSpeciesChart({ data }) {

  const speciesCount = {};

  data?.forEach((item) => {
    const species = item.tree_species || "Unknown";

    speciesCount[species] =
      (speciesCount[species] || 0) + 1;
  });

  const chartData = {
    labels: Object.keys(speciesCount),

    datasets: [
      {
        label: "Tree Count",
        data: Object.values(speciesCount),
        backgroundColor: "#43aa8b",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h3 className="text-lg font-bold mb-4">
        Tree Species Count
      </h3>

      <div style={{ height: "400px" }}>
        <Bar
          data={chartData}
          options={options}
        />
      </div>
    </div>
  );
}