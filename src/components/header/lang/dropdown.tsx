import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import { useRouter } from "next/router";
import Link from "next/link";
import { FC } from "react";

interface DropDownProps {
  path?: string;
}

const DropDown: FC<DropDownProps> = ({ path }) => {
  const { locale } = useRouter();

  const menu = (
    <Menu activeKey={locale} className="bg-black text-white rounded-lg !w-32  ">
      <MenuItem key="fr" className="cursor-pointer">
        <Link passHref href={path!} locale={"fr"}>
          <div className="cursor-pointer px-3 py-2 text-black font-medium">
            <span className="fi fi-fr mr-2 lg:text-base "></span> French (Fr)
          </div>
        </Link>
      </MenuItem>
      <MenuItem key="en" className="cursor-pointer">
        <Link passHref href={path!} locale={"en"}>
          <div className="cursor-pointer px-3 py-2 text-black font-medium">
            <span className="fi fi-us w-6 mr-2 lg:text-base"></span> English
            (En)
          </div>
        </Link>
      </MenuItem>
    </Menu>
  );
  return (
    <Dropdown trigger={["click"]} overlay={menu} animation="slide-up">
      <button className="text-black flex items-center">
        <span
          className={
            locale === "fr"
              ? `fi fi-${locale} text-[20px] sm:text-[25px]`
              : "fi fi-us text-[20px] sm:text-[25px]"
          }
        ></span>
      </button>
    </Dropdown>
  );
};

DropDown.defaultProps = {
  path: "/",
};

export default DropDown;
