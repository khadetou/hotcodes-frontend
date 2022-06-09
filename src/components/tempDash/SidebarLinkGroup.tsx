import { FC, useState } from "react";
import Link from "next/link";

interface SidebarLinkGroupProps {
  activecondition?: boolean;
  sidebarExpanded?: boolean;
  setSidebarExpanded?: any;
  open?: boolean;
  setOpen?: any;
  list: any;
}

const SidebarLinkGroup: FC<SidebarLinkGroupProps> = ({
  activecondition,
  sidebarExpanded,
  setSidebarExpanded,
  list,
}) => {
  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <li
      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
        activecondition && "bg-slate-900"
      }`}
    >
      <a
        href="#0"
        className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
          activecondition && "hover:text-slate-200"
        }`}
        onClick={(e) => {
          e.preventDefault();
          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
              <path
                className={`fill-current text-slate-400 ${
                  activecondition && "text-indigo-300"
                }`}
                d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
              />
              <path
                className={`fill-current text-slate-700 ${
                  activecondition && "!text-indigo-600"
                }`}
                d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
              />
              <path
                className={`fill-current text-slate-600 ${
                  activecondition && "text-indigo-500"
                }`}
                d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
              />
            </svg>
            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
              {list.title}
            </span>
          </div>
          {/* Icon */}
          <div className="flex shrink-0 ml-2">
            <svg
              className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                open && "transform rotate-180"
              }`}
              viewBox="0 0 12 12"
            >
              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
            </svg>
          </div>
        </div>
      </a>
      <div className="lg:hidden  lg:sidebar-expanded:block 2xl:block">
        <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
          {list.list.map(({ link, title }: any, idx: any) => (
            <li key={idx} className="mb-1 last:mb-0">
              <Link passHref href={link}>
                <button className="block text-slate-400 hover:text-slate-200 transition duration-150 truncate">
                  <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    {title}
                  </span>
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default SidebarLinkGroup;
