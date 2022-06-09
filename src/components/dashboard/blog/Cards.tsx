import React from "react";

import LineChart from "../charts/LineChart";
import Icon from "/public/images/icon-01.svg";
import BlogImg from "/public/images/blog-img.png";
import EditMenu from "../../editMenue/index";
import Image from "next/image";
// Import utilities
import { tailwindConfig, hexToRGB } from "@/utils/Utils";

function Cards() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200 cursor-pointer">
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
                Edit
              </a>
            </li>
            <li>
              <a
                className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3"
                href="#0"
              >
                Publish
              </a>
            </li>
            <li>
              <a
                className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3"
                href="#0"
              >
                Delete
              </a>
            </li>
          </EditMenu>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">
          The complete React developer 2022
        </h2>
        <div className="text-xs font-normal text-slate-400 uppercase mb-1">
          How to effectively use react in the best way ever telling you the best
          way and the best pluggins to use in 2022
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className={`grow  pb-5 px-5 mt-2 flex justify-center `}>
        {/* Change the height attribute to adjust the chart height */}
        <Image src={BlogImg} className="rounded-md" alt="blog image" />
      </div>
    </div>
  );
}

export default Cards;
