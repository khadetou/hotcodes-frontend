import React, { FC } from "react";
import { useTranslation } from "react-i18next";

interface TitleProps {
  title: string;
  p?: string;
  className?: string;
}

const Title: FC<TitleProps> = ({ title, p, className }) => {
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col items-center max-w-[1184px]">
      <h1
        className={`lg:text-[101px] xxs:text-[47px] md:text-[60px] md:mt-[66px] leading-none text-[32px] mt-[32px] lg:leading-[104px] font-light text-center lg:mt-[66px]  ${className}`}
      >
        {title}
      </h1>
      {p && (
        <p className="text-center text-[14px] md:text-[20px] leading-[26px] text-dark  max-w-[750px] font-medium mt-[22px]">
          {p}
        </p>
      )}
    </div>
  );
};

export default Title;
