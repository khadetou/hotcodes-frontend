import { useState, useEffect, useRef, FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/images/hotcodes-dark.svg";
import {
  BlogIcon,
  DashboardIcon,
  MessageIcon,
  OrderIcon,
  UserIcon,
  Users,
} from "@/icons/index";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import { useActions } from "@/hooks/useActions";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}
const Sidebar: FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const { user } = useTypedSelector((state) => state.authReducer);
  const { LoadUser } = useActions();
  const { pathname } = useRouter();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(true);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(true);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  //Load user
  useEffect(() => {
    if (!user) {
      LoadUser();
    }
  }, [user]);

  const SidebarItems = [
    {
      title: "Dashboard",
      pathName: "dashboard",
      link: "/dashboard",
      Icon: DashboardIcon,
    },
    {
      title: "Blog",
      pathName: "blog",
      link: "/dashboard/blog",
      Icon: BlogIcon,
    },
    {
      title: "Orders",
      pathName: "orders",
      link: "/dashboard/orders",
      Icon: OrderIcon,
    },
    ...(user?.roles.includes("admin")
      ? [
          {
            title: "Users",
            pathName: "users",
            link: "/dashboard/users",
            Icon: Users,
          },
        ]
      : []),
    {
      title: "Profile",
      pathName: "profile",
      link: "/dashboard/profile",
      Icon: UserIcon,
    },
    {
      title: "Messages",
      pathName: "messages",
      link: "/dashboard/messages",
      Icon: MessageIcon,
    },
  ];

  return (
    <section className="h-screen">
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:!z-auto transition-opacity duration-200 ${
          sidebarOpen ? "!opacity-100" : "!opacity-0 !pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:!translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar ${
          sidebarExpanded ? "lg:!w-20" : "w-64"
        } w-64 lg:sidebar-expanded:!w-64 shrink-0 bg-white shadow-md p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "!translate-x-0" : "!-translate-x-64 lg:trasnlate-x-0"
        }`}
      >
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <Link href="/">
            <button className="w-[95px] flex items-center text-white xl:w-[115px]">
              <Image src={Logo} />
            </button>
          </Link>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Pages
              </span>
            </h3>
            <ul className="mt-3">
              {SidebarItems.map(({ link, title, Icon, pathName }, idx) => (
                <li
                  key={idx}
                  className={`px-3 py-2 rounded-md mb-0.5 last:mb-0 group hover:bg-pink-transparent cursor-pointer ${
                    pathname.endsWith(pathName) &&
                    "bg-dark-pink hover:!bg-dark-pink"
                  }`}
                >
                  <Link href={link}>
                    <button
                      className={`block text-gray group-hover:text-dark-pink truncate transition duration-150  ${
                        pathname.endsWith(pathName) &&
                        "hover:!text-white !text-white"
                      }`}
                      type="button"
                    >
                      <div className="flex items-center">
                        <Icon size={24} />

                        {!sidebarExpanded && (
                          <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                            {title}
                          </span>
                        )}
                      </div>
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-3 hidden lg:inline-flex  justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className={`w-6 h-6 fill-current ${
                  !sidebarExpanded && "rotate-180"
                }`}
                viewBox="0 0 24 24"
              >
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
