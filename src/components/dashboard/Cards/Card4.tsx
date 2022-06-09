import React from "react";

// Import utilities
import { tailwindConfig } from "@/utils/Utils";
import BarChart from "../charts/Barchart";

function Card4() {
  const chartData = {
    labels: [
      "12-01-2020",
      "01-01-2021",
      "02-01-2021",
      "03-01-2021",
      "04-01-2021",
      "05-01-2021",
    ],
    datasets: [
      // Light blue bars
      {
        label: "Direct",
        data: [800, 1600, 900, 1300, 1950, 1700],
        backgroundColor: "#ff0080",
        hoverBackgroundColor: "#ff0080",
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: "Indirect",
        data: [4900, 2600, 5350, 4800, 5200, 4800],
        backgroundColor: "#7928ca",
        hoverBackgroundColor: "#7928ca",
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Direct VS Indirect</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default Card4;
