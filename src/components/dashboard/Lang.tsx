import { useState } from "react";
import Image from "next/image";
// style="height: 30px; min-width: 30px; width: 30px;"
const Lang = () => {
  const [open, setOpen] = useState(false);
  return (
    <ul className="flex mb-2 ml-auto rtl:ml-0 rtl:mr-auto lg:mb-0">
      <li className="nav-item dropdown" x-data="{ open: false }">
        <button className="block p-2" type="button">
          <div onClick={() => setOpen(!open)}>
            {/* <Image src=""  className="max-w-full rounded-full"
          alt="user" /> */}
          </div>
          <span className="bg-primary"></span>
        </button>
        <div
          className="absolute transition ease-in duration-500 z-40 p-0 rounded top-14 w-72"
          onClick={() => setOpen(false)}
        >
          {/* x-transition:enter="transition ease-in duration-500"
        x-transition:enter-start="opacity-0 transform translate-y-16"
        x-transition:enter-end="opacity-100 transform translate-y-0"
        x-transition:leave="transition ease-out duration-500"
        x-transition:leave-start="opacity-100 transform translate-y-0"
        x-transition:leave-end="opacity-0 transform translate-y-0"> */}
          <div className="relative rounded-t-lg rounded-b-lg flex flex-col bg-white shadow-lg dark:bg-dark-card">
            <div className="p-0 ">
              <ul className="flex flex-col p-0 dark:text-gray-600">
                <li className="inline-block dark:bg-dark-card dark:hover:bg-indigo-100 w-full px-5 py-3 border-b dark:border-gray-700 rounded-t">
                  <a className="flex items-center p-0" href="#">
                    {/* <img src="{{path}}assets/images/Flag/flag-03.png" alt="img-flaf" className="w-full mr-2"
                    style="width: 15px;height: 15px;min-width: 15px;"> */}
                    Spanish
                  </a>
                </li>
                <li className="inline-block hover:bg-indigo-100 w-full px-5 py-3 border-b dark:border-gray-700">
                  <a className="flex items-center p-0" href="#">
                    {/* <img
                    src="{{path}}assets/images/Flag/flag-04.png" alt="img-flaf" className="w-full mr-2"
                    style="width: 15px;height: 15px;min-width: 15px;"> */}
                    Italian
                  </a>
                </li>
                <li className="inline-block hover:bg-indigo-100 w-full px-5 py-3 border-b dark:border-gray-700">
                  <a className="flex items-center p-0" href="#">
                    {/* <img
                    src="{{path}}assets/images/Flag/flag-02.png" alt="img-flaf" className="w-full mr-2"
                    style="width: 15px;height: 15px;min-width: 15px;"> */}
                    French
                  </a>
                </li>
                <li className="inline-block hover:bg-indigo-100 w-full px-5 py-3 border-b dark:border-gray-700">
                  <a className="flex items-center p-0" href="#">
                    {/* <img
                    src="{{path}}assets/images/Flag/flag-05.png" alt="img-flaf" className="w-full mr-2"
                    style="width: 15px;height: 15px;min-width: 15px;"> */}
                    German
                  </a>
                </li>
                <li className="inline-block hover:bg-indigo-100 w-full px-5 py-3 border-b dark:border-gray-700 rounded-b">
                  <a className="flex items-center p-0" href="#">
                    {/* <img src="{{path}}assets/images/Flag/flag-06.png" alt="img-flaf" className="w-full mr-2"
                    style="width: 15px;height: 15px;min-width: 15px;"> */}
                    Japanese
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Lang;
