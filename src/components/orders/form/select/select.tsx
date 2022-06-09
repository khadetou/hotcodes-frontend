import { Dispatch, FC } from "react";
import { useState } from "react";
import Select from "react-select";

type Options = {
  id: string;
  title: string;
};

interface SelectProps {
  options: Options[];
  toggle: boolean;
  setToggle: Dispatch<boolean>;
  onChangeSelect?: any;
  formData: any;
  selected: string;
  selectedTitle: string;
  className?: string;
}

const Selects: FC<SelectProps> = ({
  options,
  toggle,
  setToggle,
  formData,
  selected,
  selectedTitle,
  onChangeSelect,
  className,
}) => {
  // const [toggle, setToggle] = useState<boolean>(false);
  // const onChange = (e: any, selected: string) => {
  //   if (typeof setSelectOther === "function") {
  //     e.value === "Other" ? setSelectOther!(true) : setSelectOther!(false);
  //   }
  //   setSelected({
  //     ...formData,
  //     [selected]: e.value !== "Other" ? e.value : "",
  //   });

  //   setToggle(false);
  // };

  const option: any = [];

  options.forEach(({ id, title }) => {
    option.push({
      value: title,
      label: (
        <div className=" font-medium text-[22px]">
          <span>{title}</span>
        </div>
      ),
    });
  });

  const styles = {
    control: (base: any, state: any) => ({
      ...base,
      color: "white",
      backgroundColor: "#fff",
      padding: "15px 20px",
      borderRadius: "28px",
      margin: "auto",
      border: "none",
      boxShadow: "0px 4px 15px rgba(234, 0, 125, 0.27)",
      width: "100%",
      maxWidth: "524px",
      cursor: "pointer",
      "@media (max-width: 767px)": {
        padding: "6px 12px",
        borderRadius: "5px",
      },
      "@media (max-width: 575px)": {
        margin: "auto",
      },
    }),
    valueContainer: (base: any, state: any) => ({
      ...base,
      backgroundColor: "#F5F5F5",
      width: "403px",
      height: "68px",
      borderRadius: "21px",
      padding: "0px",
    }),
    indicatorsContainer: (base: any, state: any) => ({
      ...base,
      display: "none",
    }),
    placeholder: (base: any, state: any) => ({
      ...base,
      fontSize: "22px",
      textAlign: "center",
    }),
    menu: (base: any, state: any) => ({
      ...base,
      maxWidth: "524px",
      width: "100%",
      padding: "10px",
      zIndex: "9999",
      display: "flex",
      justifyContent: "center",
      borderRadius: "28px",
      border: "none",
    }),
    menuList: (base: any, state: any) => ({
      ...base,
      width: "100%",
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
      maxWidth: "496px",
      width: "100%",
      height: "68px",
      borderRadius: "15px",
      display: "flex",
      margin: "3px 0",
      alignItems: "center",
      backgroundColor: state.isSelected
        ? "#EA007D"
        : state.isFocused
        ? "#ebebeb"
        : "#fff",
      color: state.isSelected
        ? "#ffffff"
        : state.isFocused
        ? "#393938"
        : "#696969",

      cursor: "pointer",
    }),
  };

  const theme = (theme: any) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
      },
    };
  };

  const formatOptionLabel = (option: any, { context }: any) =>
    context === "value" ? (
      <div className="text-center font-medium text-[22px] text-dark">
        {option.label.props.children}
      </div>
    ) : (
      option.label
    );
  return (
    <div className={`containers !px-0 ${className && className}`}>
      <div className="select-box w-full">
        <div
          className={
            toggle
              ? "options-container active w-full"
              : "options-container w-full"
          }
        >
          <Select
            options={option}
            theme={theme}
            styles={styles}
            instanceId="select"
            onChange={(value: any) => onChangeSelect(value, selected)}
            value={formData.selected}
            placeholder={selectedTitle}
            formatOptionLabel={formatOptionLabel}
            isSearchable={false}
            onFocus={() => setToggle(true)}
            onBlur={() => setToggle(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Selects;
