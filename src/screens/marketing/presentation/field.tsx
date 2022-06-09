import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { FaPlay } from "react-icons/fa";
import Button from "@/components/button/Button";
import { useRouter } from "next/router";
import { Divider } from "rc-menu";

interface FieldProps {
  src: StaticImageData;
  audit?: StaticImageData;
  title: string;
  h1: string;
  paragraph: string;
  button: string;
  style?: string;
  flip?: string;
}

const Field: FC<FieldProps> = ({
  src,
  title,
  paragraph,
  h1,
  style,
  audit,
  flip,
}) => {
  const { locale } = useRouter();
  const styles =
    locale === "en"
      ? "md:text-[83px] xl:text-[83px] md:leading-[76px] xl:leading-[76px] "
      : "md:text-[54px] xl:text-[54px] md:leading-[65px] xl:leading-[65px] ";
  const h1Text = h1.split(".");

  return (
    <div
      className={`flex ${style} justify-between mb-[30px] xs:mb-[80px] flex-col-reverse items-center`}
    >
      <div className="relative  lg:mr-6">
        <div className={flip}>
          <Image src={src} />
        </div>
      </div>
      <div className="max-w-[636px] w-full">
        <span className="uppercase font-semibold text-[17px] xxs:text-xl text-dark-pink">
          {title}
        </span>
        <h1
          className={`text-dark leading-[1.2] md:leading-[inherit] w-full font-bold text-[47px]`}
        >
          <span className="text-transparent bg-grad-text-2 bg-clip-text">
            {h1Text[0]}
          </span>
          {h1Text[1]}
        </h1>
        <p className="text-dark text-base font-medium text-[14px] lg:text-[18px] md:text-xl xl:text-xl mb-[10px] leading-[26px] xxs:mb-[1rem] lg:mb-8">
          {paragraph}
        </p>
        {audit && (
          <div className="mb-3">
            <Image src={audit} />
          </div>
        )}
        <button className="text-base font-bold text-dark-pink px-16 py-3 rounded-md border border-dark-pink">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Field;
