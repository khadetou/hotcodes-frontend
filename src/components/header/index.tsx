import Link from "next/link";
import { FC } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import MobileDrawer from "./drawer/mobile-drawer";
import Lang from "./lang/Lang";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Logo from "/public/images/hotcodes.svg";
import { useRouter } from "next/router";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import UserMenu from "../dashboard/header/UserMenue";

interface HeaderProps {
  className?: string;
  bgClassName?: string;
  buttonClassName?: string;
}

interface IconProps {
  className?: string;
  size?: number | string;
}

const Header: FC<HeaderProps> = ({
  className,
  bgClassName,
  buttonClassName,
}) => {
  const { t } = useTranslation("header");
  const { isAuthenticated, user } = useTypedSelector(
    (state) => state.authReducer
  );
  const menues = [
    { title: t("home"), path: "/" },
    { title: t("about"), path: "/about" },
    {
      title: t("services"),
      path: "/services",
      className: "relative group",
    },
    { title: t("work"), path: "/work" },
    { title: t("products"), path: "/products" },
    { title: t("career"), path: "/career" },
    { title: t("blogs"), path: "/blogs" },
  ];
  const { pathname } = useRouter();

  return (
    <header
      className={`text-white w-full absolute z-20 min-w-0 top-0 left-0 transition-all ease-in duration-[0.4s] ${className}`}
    >
      <div className={`w-full bg-header h-11 flex items-center ${bgClassName}`}>
        <div className="flex justify-between  items-center containers">
          <Link passHref href="/">
            <button className="w-[95px] flex items-center text-white xl:w-[115px]">
              <Image src={Logo} alt="logo" />
            </button>
          </Link>
          <nav className="mx-auto hidden lg:flex nav">
            {menues.map(({ title, path, className }, key) => (
              <Link passHref key={key} href={path}>
                <button
                  className={`flex px-1 mx-3 my-1 py-3 xl:px-1  xl:py-3 xl:text-base relative group  font-Inter font-normal leading-none text-[0.95rem]  before:contente-[""] before:w-0  hover:before:w-full before:h-[3px] before:transition-all before:left-0 before:bg-white before:absolute before:bottom-1  hover:text-gray-500 before:duration-500 ease-linear ${className} ${
                    pathname.endsWith(path) && "before:!bg-white before:!w-full"
                  }`}
                  type="button"
                >
                  {title}
                  {title.toLocaleLowerCase() === "services" && (
                    <RiArrowDropDownLine
                      size="27"
                      className="group-hover:rotate-180 transition-all ease-in-out duration-300"
                    />
                  )}
                  {title.toLocaleLowerCase() === "services" && (
                    <div className="absolute !w-[245px] rounded-md top-7  bg-white transition-transform ease-linear duration-300 shadow-shadow-sm  text-dark   invisible translate-x-3 translate-y-12 opacity-0  group-hover:visible group-hover:opacity-100 group-hover:translate-y-[21px] group-hover:translate-x-0">
                      <Link passHref href="/orders/design">
                        <a className="!text-base inline-block w-full py-4 hover:text-dark-pink !font-medium text-gray">
                          Ui/Ux Design
                        </a>
                      </Link>
                      <hr className="text-light-gray" />
                      <Link passHref href="/orders/web">
                        <a className="!text-base inline-block w-full py-4  hover:text-dark-pink !font-medium text-gray">
                          Web Developement
                        </a>
                      </Link>
                      <hr className="text-light-gray" />
                      <Link passHref href="/orders/mobile">
                        <a className="!text-base hover:text-dark-pink inline-block w-full py-4  !font-medium text-gray">
                          Mobile Developement
                        </a>
                      </Link>
                      <hr className="text-light-gray" />
                      <Link passHref href="/orders/marketing">
                        <a className="!text-base w-full py-4  hover:text-dark-pink inline-block !font-medium text-gray">
                          Digital Marketing
                        </a>
                      </Link>
                    </div>
                  )}
                </button>
              </Link>
            ))}
          </nav>
          <div className="flex  items-center">
            <Lang path={pathname} />
            {!isAuthenticated ? (
              <div className="lg:flex  hidden items-center">
                <Link passHref href="/login">
                  <button className="mx-[15px] sm:mx-[30px] lg:mx-0">
                    <FaUser className="text-white text-[20px] sm:text-[26px]  text-xl block lg:hidden" />
                  </button>
                </Link>

                <Link passHref href="/login">
                  <button className="m-0 lg:mx-[30px] ">
                    <AiOutlineLogin
                      title="Login"
                      size="29px"
                      className="cursor-pointer hidden lg:block"
                    />
                  </button>
                </Link>
                <Link passHref href="/register">
                  <button>
                    <a
                      className={`border-2 border-white rounded-md font-medium text-sm mr-2 px-2 xxs:font-bold xxs:text-base xxs:mr-0 xxs:px-10 xxs:py-1 ${buttonClassName}`}
                    >
                      {t("signup")}
                    </a>
                  </button>
                </Link>
              </div>
            ) : (
              <UserMenu user={user} isAuthenticated={isAuthenticated} />
            )}
            <MobileDrawer />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
