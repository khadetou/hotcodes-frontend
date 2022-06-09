import React, { FC } from "react";

interface ButtonsProps {
  text: string;
  className?: string;
}
const Buttons: FC<ButtonsProps> = ({ text, className }) => {
  return (
    <button
      type="button"
      className={`px-16 py-2 mr-1 mb-1 text-white text-sm font-bold ${className} rounded-md`}
    >
      {text}
    </button>
  );
};

export default Buttons;
