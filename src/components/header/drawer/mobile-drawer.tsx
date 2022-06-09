import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import Drawer from "./drawer";
import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";
import Scrollbars from "react-custom-scrollbars-2";

const MobileDrawer = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation("header");
  const menues = [
    { title: t("home"), path: "/" },
    { title: t("about"), path: "/about" },
    { title: t("services"), path: "/services" },
    { title: t("work"), path: "/work" },
    { title: t("products"), path: "/products" },
    { title: t("career"), path: "/career" },
    { title: t("blogs"), path: "/blogs" },
  ];
  return (
    <Drawer
      width="320px"
      drawerHandler={
        <div className="flex items-center justify-center shrink-0 w-[26px] lg:hidden">
          <FaBars size="26px" color="#fff" />
        </div>
      }
      open={open}
      toggleHandler={() => setOpen(!open)}
      closeButton={<FaTimes size="26px" color="#000" />}
      drawerStyle="w-full h-full"
      closeBtnStyle="flex items-center justify-center top-[25px] right-[30px] absolute z-10 cursor-pointer"
    >
      <Scrollbars autoHide>
        <div className="w-full h-full flex flex-col pt-[100px] pb-[40px] px-[30px]">
          <div className="w-full flex flex-col menu">
            {menues.map(({ title, path }, key) => (
              <Link key={key} href={path}>
                <a className="block text-gray-700 hover:bg-gray-200 hover:text-gray-900">
                  {title}
                </a>
              </Link>
            ))}
          </div>
          <div className="w-full flex flex-col items-center mt-5">
            <div className="w-full flex items-center ">
              <div className="flex  items-center">
                <Link href="/login">
                  <a className="mr-8 lg:mx-[30px] ">
                    <AiOutlineLogin
                      size="29px"
                      className="cursor-pointer block text-black "
                    />
                  </a>
                </Link>
                <Link href="/register">
                  <a>
                    <button className=" border-2  border-black rounded-md font-bold text-sm  px-7 py-1">
                      {t("signup")}
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Scrollbars>
    </Drawer>
  );
};

export default MobileDrawer;
