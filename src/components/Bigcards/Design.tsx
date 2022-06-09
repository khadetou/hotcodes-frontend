import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { useTranslation } from "next-i18next";
interface BigcardsProps {
  title: string;
  toptitle: string;
  subtitle: string;
  image: StaticImageData;
}
const DesignCards: FC<BigcardsProps> = ({
  title,
  toptitle,
  subtitle,
  image,
}) => {
  const splitedTitle = toptitle.split(",");
  const { t } = useTranslation("marketing");
  return (
    <div className="max-w-[633px]  lg:h-[800px]  rounded-[35px] shadow-shadow-sm rounde- flex flex-col items-center">
      <div className="rounded-t-[35px]">
        <Image src={image} className="rounded-t-[35px]" alt="Design image" />
      </div>
      <div className="text-cente w-full px-5">
        <h3 className="text-[18px] text-center lg:text-[32px] text-dark font-normal mb-[3px] mt-[15px] md:mt-[35px] xxs:text-[20px] ">
          {splitedTitle[0]}
          <span className="text-transparent bg-clip-text bg-grad-text-2">
            {splitedTitle[1]}
          </span>
        </h3>
        <h1 className="text-center font-semibold break-words text-dark text-[25px] leading-[1.2] sm:leading-[inherit] xxs:text-[40px] ">
          {title}
        </h1>
        <p className="text-center text-gray text-lg xxs:text-xl mt-[10px]">
          {subtitle}
        </p>
        <div className="flex justify-between items-center p-0 mb-[20px] mt-[15px] xl:px-7">
          <button className="font-bold rounded-full bg-grad-btn text-white text-xs px-3 py-1 xl:px-24 xxs:text-sm xxs:px-10  xxs:py-4">
            {t("cards.button1")}
          </button>
          <button className="font-bold text-dark-pink underline text-[13px] xxs:text-base">
            {t("cards.button2")}
          </button>
        </div>
      </div>
    </div>
  );
};
export default DesignCards;
