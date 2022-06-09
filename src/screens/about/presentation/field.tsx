import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { IoIosPlay } from "react-icons/io";
import { useRouter } from "next/router";

interface FieldProps {
  src: StaticImageData;
  title: string;
  h1: string;
  paragraph: string;
  button: string;
  style?: string;
  flip?: string;
  data?: string;
  dataos?: string;
}

const Field: FC<FieldProps> = ({
  src,
  title,
  paragraph,
  h1,
  style,
  flip,
  data,
  dataos,
}) => {
  const { locale } = useRouter();
  const styles =
    locale === "en"
      ? "md:text-[83px] xl:text-[83px] md:leading-[76px] xl:leading-[76px] "
      : "md:text-[54px] xl:text-[54px] md:leading-[65px] xl:leading-[65px] ";
  const h1Text = h1.split(".");

  return (
    <div
      className={`flex ${style} justify-between mb-[30px] xs:mb-[160px] flex-col-reverse items-center`}
    >
      <div
        data-aos={data}
        data-aos-offset="300"
        data-aos-easing="ease-in-out"
        className="relative  lg:mr-6"
      >
        <button className="z-10 absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 w-[60px] sm:w-20 lg:w-[100px] h-[60px] sm:h-20 lg:h-[100px] p-0 bg-transparent before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:block before:w-[60px] before:sm:w-[80px] before:lg:w-[100px]  before:h-[60px] before:sm:h-[80px] before:lg:h-[100px] before:bg-dark-pink before:rounded-full before:animate-pulsePlay before:opacity-50">
          <span className="bg-white/50 w-[inherit] h-[inherit] text-center rounded-full opacity-100 cursor-pointer transition-all duration-[0.5s] flex justify-center items-center relative z-10 text-white text-[40px] lg:text-[62px] sm:text-[48px] ">
            <IoIosPlay />
          </span>
        </button>
        <div className={flip}>
          <Image src={src} />
        </div>
      </div>
      <div
        data-aos={dataos}
        data-aos-offset="300"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
        className="max-w-[639px] w-full"
      >
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
      </div>
    </div>
  );
};

export default Field;
