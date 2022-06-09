import Dot from "@/icons/dot";
import Chart from "react-apexcharts";

const Conversions = () => {
  return (
    <div className="flex-auto w-full xl:w-3/6 lg:px-4">
      <div className="flex flex-col mb-8 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-dark-card dark:text-gray-600">
        <div className="relative flex flex-wrap justify-between p-6 pb-0">
          <div className="">
            <h4 className="text-2xl font-medium">Conversions</h4>
          </div>
          <div className="flex items-center" x-data="{ open: false }">
            <div className="" x-data="{ open: false }">
              <span
                className="dark:text-blue-300 flex items-center h5 cursor-pointer text-gray-600 "
                //   onClick={() => setOpen(false)}
              >
                This Week
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // style={open ? { transform: "rotate(180deg)" } : {}}
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
                className="absolute z-50 py-2 right-4 text-base text-left text-gray-600 bg-white border rounded shadow-md bg-clip-padding dark:bg-zinc-900 dark:border-zinc-900"
                //   onClick={() => setOpen(false)}
              >
                {Array.from(Array(7).keys()).map((_, idx) => (
                  <a
                    key={idx}
                    className="block clear-both w-full px-4 py-1 font-normal whitespace-nowrap hover:text-blue-500 focus:text-white focus:bg-blue-500 "
                    href="javascript:void(0);"
                  >
                    This Week
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-auto p-6">
          <div id="d-activity" className="d-activity"></div>
        </div>
      </div>
    </div>
  );
};

export default Conversions;
