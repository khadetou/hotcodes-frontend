import { FC, useState } from "react";

interface InputProps {
  type: string;
  name: string;
  value: string;
  label: string;
  id?: string;
  placeholder?: string;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type,
  name,
  value,
  id,
  placeholder,
  onChange,
  label,
  className,
  containerClassName,
  labelClassName,
}) => {
  const [focused, setFocused] = useState(false);

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = (e: any) => {
    if (e.target.value === "") {
      setFocused(false);
    }
  };
  return (
    <label
      htmlFor={id}
      className={
        type === "text"
          ? `${labelClassName} cursor-pointer flex max-w-[524px] w-full h-[98px] flex-col`
          : "flex flex-col justify-center items-center"
      }
    >
      <div
        className={
          type === "text"
            ? `bg-white ${
                containerClassName && containerClassName
              } py-[15px] px-5 cursor-pointer w-full max-h-[98px] h-full shadow-shadow-sm max-w-[524px] rounded-[23px]`
            : "max-w-[346px] w-full bg-white  py-[13px] px-[20px] shadow-shadow-sm mb-[51px] rounded-[23px]"
        }
      >
        <div
          className={
            type === "checkbox"
              ? "bg-light-gray p-3 w-full rounded-[15px] flex items-center  h-full flex-row-reverse justify-end"
              : "relative max-w-[524px] rounded-xl bg-light-gray max-h-[98px] w-full h-full"
          }
        >
          {type === "checkbox" ? (
            <label
              htmlFor={id}
              className="text-dark cursor-pointer font-medium text-[18px] ml-2"
            >
              {label}
            </label>
          ) : (
            <label
              className={`absolute text-[#b2b2b2] left-[20px] md:left-[60px] font-medium text-base xxs:text-[20px]  top-1/2 z-10 -translate-y-1/2 duration-300 ${
                (focused && "focus") || (value && "focus")
              }`}
            >
              {label}
            </label>
          )}

          <input
            className={
              type === "text"
                ? `bg-transparent ${
                    className && className
                  } focus:border focus:border-[#e293d3] focus:shadow-input rounded-xl focus:ring-0  !focus:shadow-[#e9aede] w-full h-full  outline-none px-[20px] md:px-[60px] border-none py-6 text-dark text-lg md:text-[22px] z-50  absolute font-medium`
                : "border-light-gray w-8 h-8 text-dark-pink focus:ring-0 rounded-lg border-2"
            }
            type={type}
            onFocus={onFocus}
            onBlur={onBlur}
            name={name}
            value={value}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
      </div>
    </label>
  );
};

export default Input;
