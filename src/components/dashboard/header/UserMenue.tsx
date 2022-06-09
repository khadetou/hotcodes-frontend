import React, { useState, useRef, useEffect, FC } from "react";
import Link from "next/link";
import Transition from "@/utils/Transition";
import { useActions } from "@/hooks/useActions";

interface UserMenuProp {
  user?: any;
  isAuthenticated?: boolean;
}

const UserMenu: FC<UserMenuProp> = ({ user, isAuthenticated }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { LogoutUser } = useActions();

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
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

  //GET THE FIRST LETTER OF EACH NAME
  const getInitials = (name: string) => {
    const names = name.split(" ");
    return names.map((n) => n[0]).join("");
  };

  return (
    <div className="relative inline-flex lg:ml-8">
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <div className="relative w-8 h-8 rounded-full flex items-center justify-center bg-dark-pink">
          {isAuthenticated && user && (
            <span className="text-white font-bold text-normal">{`${getInitials(
              user.firstName
            )}${getInitials(user.lastName)}`}</span>
          )}
        </div>
        <div className="flex items-center truncate mr-3">
          <svg
            className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
            viewBox="0 0 12 12"
          >
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
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
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200">
            <div className="font-medium text-slate-800">
              {user && user.firstName}
            </div>
            <div className="text-xs text-slate-500 italic">
              {user && user.roles.includes("admin") ? "Administrator" : "User"}
            </div>
          </div>
          <ul>
            <li>
              <Link passHref href="/dashboard/profile">
                <button
                  className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                  type="button"
                  onClick={() => {
                    setDropdownOpen(!dropdownOpen);
                  }}
                >
                  Profile
                </button>
              </Link>{" "}
            </li>
            <li>
              <Link passHref href="/dashboard">
                <button
                  className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                  type="button"
                  onClick={() => {
                    setDropdownOpen(!dropdownOpen);
                  }}
                >
                  Dashboard
                </button>
              </Link>{" "}
            </li>
            <li>
              <button
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                type="button"
                onClick={() => {
                  setDropdownOpen(!dropdownOpen);
                  LogoutUser();
                }}
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
};

export default UserMenu;
