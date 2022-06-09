import React, { FC } from "react";
import { useTranslation } from "react-i18next";

interface TitleProps {
  title: string;
  p?: string;
  className?: string;
  pclassName?: string;
}

const Titlebold: FC<TitleProps> = ({ title, p, className, pclassName }) => {
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col items-center max-w-[1184px]">
      <h1
        className={`lg:text-[86px] xxs:text-[47px] md:text-[60px] md:mt-[66px] leading-none text-[32px] mt-[32px] lg:leading-[104px] font-bold text-dark text-center lg:mt-[66px]  ${className}`}
      >
        {title}
      </h1>
      {p && (
        <p
          className={`text-center text-[14px] md:text-[20px] leading-[26px] text-gray  max-w-[750px] font-medium  ${pclassName}`}
        >
          {p}
        </p>
      )}
    </div>
  );
};

export default Titlebold;
