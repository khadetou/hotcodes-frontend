import React, { FC } from "react";
import ConvEran from "./ConvEran";
import GrossSales from "./GrossSales";

interface ChartProps {
  options1?: any;
  series1?: any;
  options2?: any;
  series2?: any;
}
const Chart: FC<ChartProps> = ({ options1, series1, options2, series2 }) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-2/3">
        <GrossSales options={options1} series={series1} />
        <ConvEran options={options2} series={series2} />
      </div>
    </div>
  );
};

export default Chart;
