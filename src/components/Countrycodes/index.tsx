import React, { FC } from "react";
import Select from "react-select";
import codes from "country-calling-code";
import { classNames } from "react-select/dist/declarations/src/utils";

const options: any = [];

codes.forEach(({ isoCode2, country, countryCodes, isoCode3 }, idx) => {
  options.push({
    value: countryCodes[0],
    label: (
      <div className=" hover:text-white font-medium">
        <span className={`mr-2  fi fi-${isoCode2.toLocaleLowerCase()}`}></span>
        {country}
      </div>
    ),
  });
});

const styles = {
  control: (base: any, state: any) => ({
    ...base,
    color: "white",
    backgroundColor: "#ea007d",
    padding: "7px 17px",
    borderRadius: "19px",
    cursor: "pointer",
    "@media (max-width: 767px)": {
      padding: "6px 12px",
      borderRadius: "5px",
    },
  }),
  menu: (base: any, state: any) => ({
    ...base,
    width: "384px",
    borderRadius: "10px",
    "@media (max-width: 767px)": {
      width: "250px",
    },
  }),
  menuList: (base: any, state: any) => ({
    ...base,
    "&::-webkit-scrollbar": {
      width: " 0.375rem",
      height: "0.375rem",
      backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-track": {
      borderRadius: "100vh",
      backgroundColor: "#ea007d",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#e0cbcb",
      borderRadius: "100vh",
      border: "3px solid #f6f7ed",
    },

    "&::-webkit-scrollbar-thumb:hover": {
      background: "#c0a0b9",
    },
  }),
  option: (base: any, state: any) => ({
    ...base,
    "&:hover": {
      color: "#fff",
    },
  }),
  placeholder: (base: any, state: any) => ({
    ...base,
    color: "#fff",
  }),
  input: (base: any, state: any) => ({
    ...base,
    color: "#fff",
  }),

  indicatorsContainer: (base: any, state: any) => ({
    ...base,
    display: "block",
    "@media (max-width: 767px)": {
      display: "none",
    },
  }),
};

const theme = (theme: any) => {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary: "#EA007D",
      primary25: "#E293D3",
    },
  };
};

const formatOptionLabel = (option: any, { context }: any) =>
  context === "value" ? (
    <div className="text-white text-medium flex items-center justify-between ">
      <span
        className={`flex md:mr-3 justify-center${option.label.props.children[0].props.className}`}
      ></span>
      <span className="hidden md:block">{`+${option.value}`}</span>
    </div>
  ) : (
    option.label
  );

interface CountryDropdownProps {
  instanceId: string;
  className?: string;
  onChange: (e: any) => void;
}

const CountryDropdown: FC<CountryDropdownProps> = ({
  instanceId,
  className,
  onChange,
}) => {
  return (
    <Select
      theme={theme}
      formatOptionLabel={formatOptionLabel}
      onChange={onChange}
      isSearchable={false}
      instanceId={instanceId}
      defaultValue={options[188]}
      styles={styles}
      className={`!absolute !top-1/2 !-translate-y-1/2 left-[10px] md:!left-[20px] !z-50 ${className}`}
      options={options}
    />
  );
};

export default CountryDropdown;
