import React from "react";

import LineChart from "../charts/LineChart";
import Icon from "/public/images/icon-01.svg";
import EditMenu from "../../editMenue/index";
import Image from "next/image";
// Import utilities
import { tailwindConfig, hexToRGB } from "@/utils/Utils";

function DashboardCard01() {
  const chartData = {
    labels: [
      "12-01-2020",
      "01-01-2021",
      "02-01-2021",
      "03-01-2021",
      "04-01-2021",
      "05-01-2021",
      "06-01-2021",
      "07-01-2021",
      "08-01-2021",
      "09-01-2021",
      "10-01-2021",
      "11-01-2021",
      "12-01-2021",
      "01-01-2022",
      "02-01-2022",
      "03-01-2022",
      "04-01-2022",
      "05-01-2022",
      "06-01-2022",
      "07-01-2022",
      "08-01-2022",
      "09-01-2022",
      "10-01-2022",
      "11-01-2022",
      "12-01-2022",
      "01-01-2023",
    ],
    datasets: [
      // Indigo line
      {
        data: [
          732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192,
          154, 273, 191, 191, 126, 263, 349, 252, 423, 622, 470, 532,
        ],
        fill: true,
        backgroundColor: `rgba(234, 0, 125, 0.1)`,
        borderColor: "#ff0080",
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: "#ff0080",
        clip: 20,
      },
      // Gray line
      {
        data: [
          532, 532, 532, 404, 404, 314, 314, 314, 314, 314, 234, 314, 234, 234,
          314, 314, 314, 388, 314, 202, 202, 202, 202, 314, 720, 642,
        ],
        borderColor: "rgba(121, 40, 202, 0.3)",
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: "rgba(121, 40, 202, 0.3)",
        clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <Image src={Icon} width="32" height="32" alt="Icon 01" />
          {/* Menu button */}
          <EditMenu className="relative inline-flex">
            <li>
              <a
                className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3"
                href="#0"
              >
                Fund this project
              </a>
            </li>
            <li>
              <a
                className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3"
                href="#0"
              >
                Donate to this project
              </a>
            </li>
            <li>
              <a
                className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3"
                href="#0"
              >
                Share this project
              </a>
            </li>
          </EditMenu>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">
          MarketPlace
        </h2>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
          Amount Raised
        </div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">$24,780</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">
            +49%
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={chartData} width={389} height={128} />
      </div>
    </div>
  );
}

export default DashboardCard01;
