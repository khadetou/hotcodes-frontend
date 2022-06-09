import React, { useState, useRef, useEffect } from "react";

import Transition from "@/utils/Transition";
import NotificationIcon from "@/icons/notifation-icon";

function Notifications() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (
        !dropdownOpen ||
        dropdown.current!.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative inline-flex ml-3">
      <button
        ref={trigger}
        className={`w-8 h-8 flex items-center justify-center bg-white shadow-shadow-sm text-gray hover:text-dark-pink hover:bg-pink-transparent transition duration-150 rounded-full ${
          dropdownOpen && "bg-slate-200"
        }`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Notifications</span>
        <NotificationIcon />
        <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"></div>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 -mr-48 sm:mr-0 min-w-80 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4">
            Notifications
          </div>
          <ul>
            <li className="border-b border-slate-200 last:border-0">
              <button
                className="block py-2 px-4 hover:bg-slate-50"
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="block text-sm mb-2">
                  📣{" "}
                  <span className="font-medium text-slate-800">
                    Edit your information in a swipe
                  </span>{" "}
                  Sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim.
                </span>
                <span className="block text-xs font-medium text-slate-400">
                  Feb 12, 2021
                </span>
              </button>
            </li>
            <li className="border-b border-slate-200 last:border-0">
              <button
                className="block py-2 px-4 hover:bg-slate-50"
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="block text-sm mb-2">
                  📣{" "}
                  <span className="font-medium text-slate-800">
                    Edit your information in a swipe
                  </span>{" "}
                  Sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim.
                </span>
                <span className="block text-xs font-medium text-slate-400">
                  Feb 9, 2021
                </span>
              </button>
            </li>
            <li className="border-b border-slate-200 last:border-0">
              <button
                className="block py-2 px-4 hover:bg-slate-50"
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="block text-sm mb-2">
                  🚀
                  <span className="font-medium text-slate-800">
                    Say goodbye to paper receipts!
                  </span>{" "}
                  Sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim.
                </span>
                <span className="block text-xs font-medium text-slate-400">
                  Jan 24, 2020
                </span>
              </button>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default Notifications;
