import Dot from "@/icons/dot";
import { FC, useState } from "react";
import Chart from "react-apexcharts";

interface GrossSaleProps {
  series: any;
  options: any;
}
const GrossSales: FC<GrossSaleProps> = (chart1) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-auto">
      <div className="flex-auto w-full lg:pr-4 rtl:pr-0 rtl:pl-4">
        <div className="flex flex-col mb-8 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-dark-card">
          <div className="p-6 relative ">
            <div className="flex flex-wrap items-center justify-between pb-0 mb-0">
              <div>
                <div className="mt-0 mb-0 text-2xl font-medium dark:text-gray-600 counter">
                  $855.8K
                </div>
                <p className="block mb-0 text-gray-500 font-medium dark:text-gray-600">
                  Gross Sales
                </p>
              </div>

              <div className="flex items-center self-center">
                <div className="flex items-center text-blue-500">
                  <Dot />
                  <div className="ml-2 rtl:ml-0 rtl:mr-2">
                    <span className="text-gray-600">Sales</span>
                  </div>
                </div>
                <div className="flex items-center ml-3 rtl:ml-0 rtl:mr-3 text-cyan-500">
                  <Dot />
                  <div className="ml-2 rtl:ml-0 rtl:mr-2">
                    <span className="text-gray-600">Cost</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center" x-data="">
                <div>
                  <span
                    className="flex items-center h5 cursor-pointer text-gray-600 dark:text-blue-300"
                    onClick={() => setOpen(!open)}
                  >
                    This Week
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={open ? { transform: "rotate(180deg)" } : {}}
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div
                    className={`absolute dark:bg-dark-bg dark:border-dark-bg z-50 py-2 text-base right-4 rtl:right-0 rtl:left-4 text-left text-gray-600 bg-white border rounded hidden shadow-md bg-clip-padding ${
                      open && "!block"
                    } `}
                    onClick={() => setOpen(false)}
                  >
                    {Array.from(Array(7).keys()).map((_, idx) => (
                      <a
                        key={idx}
                        className="block clear-both w-full px-4 py-1 font-normal whitespace-nowrap hover:text-blue-500 focus:text-white focus:bg-blue-500"
                        href="javascript:void(0);"
                      >
                        This Week
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <Chart
                  options={chart1.options}
                  series={chart1.series}
                  type="area"
                  height="245"
                /> */}
            </div>
          </div>
          <div className="p-6 pt-0">
            <div id="d-main"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrossSales;
