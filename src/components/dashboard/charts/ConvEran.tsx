import React, { FC } from "react";
import Conversions from "./Conversions";
import Earnings from "./Earnings";

interface ConvEranProps {
  options: any;
  series: any;
}
const ConvEran: FC<ConvEranProps> = ({ options, series }) => {
  return (
    <div className="flex flex-wrap">
      <Conversions />
      <Earnings options={options} series={series} />
    </div>
  );
};

export default ConvEran;
