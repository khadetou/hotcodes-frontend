import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";

interface FieldProps {
  src: StaticImageData;
  textSrc: any;
  h1: string;
  paragraph: string;
  button: string;
  style?: string;
  flip?: string;
}

const Field: FC<FieldProps> = ({
  src,
  textSrc,
  paragraph,
  h1,
  style,
  button,
  flip,
}) => {
  const { locale } = useRouter();
  const styles =
    locale === "en"
      ? "md:text-[83px] xl:text-[83px] md:leading-[76px] xl:leading-[76px] "
      : "md:text-[54px] xl:text-[54px] md:leading-[65px] xl:leading-[65px] ";
  const h1Text = h1.split(".");
  console.log(textSrc);
  return (
    <div
      className={`flex ${style} justify-between mb-[30px] xs:mb-[160px] flex-col-reverse items-center`}
    >
      <div className="relative  lg:mr-6">
        <div className={flip}>
          <Image src={src} />
        </div>
      </div>
      <div className="max-w-[500px] w-full">
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
        <div className="-ml-[26px]">
          <Image src={textSrc} />
        </div>
      </div>
    </div>
  );
};

export default Field;
