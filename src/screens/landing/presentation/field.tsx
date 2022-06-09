import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { FaPlay } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";
import { useRouter } from "next/router";

interface FieldProps {
  src: StaticImageData;
  fsrc: string;
  title: string;
  h1: string;
  paragraph: string;
  button: string;
  style?: string;
  fsrcStyle?: string;
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
  fsrc,
  button,
  fsrcStyle,
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
      className={`flex ${style} justify-between mb-[30px] xs:mb-[160px] flex-col-reverse`}
    >
      <div data-aos={data} data-aos-duration="1000" className="relative">
        <div className={`${fsrcStyle} w-1/2 xxs:w-[69%] `}>
          <Image src={fsrc} />
        </div>
        <button className="z-10 absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 w-[60px] sm:w-20 lg:w-[100px] h-[60px] sm:h-20 lg:h-[100px] p-0 bg-transparent before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:block before:w-[60px] before:sm:w-[80px] before:lg:w-[100px]  before:h-[60px] before:sm:h-[80px] before:lg:h-[100px] before:bg-dark-pink before:rounded-full before:animate-pulsePlay before:opacity-50">
          <span className="bg-white/50 w-[inherit] h-[inherit] text-center rounded-full opacity-100 cursor-pointer transition-all duration-[0.5s] flex justify-center items-center relative z-10 text-white text-[40px] lg:text-[62px] sm:text-[48px] ">
            <IoIosPlay />
          </span>
        </button>
        <div className={flip}>
          <Image src={src} />
        </div>
      </div>
      <div data-aos={dataos} data-aos-duration="2500" className="max-w-[651px]">
        <span className="uppercase font-semibold text-[17px] xxs:text-xl text-black">
          {title}
        </span>
        <h1
          className={`font-light lg:leading-[54px] ${styles}  text-[33px] xs:text-[42px] leading-[1.2] lg:text-[54px]  my-[5px] xxs:leading-[44px]  text-dark lg:my-4 md:my-5 xl:my-5`}
        >
          <span className="text-transparent bg-grad-text-2 bg-clip-text">
            {h1Text[0]}
          </span>
          {h1Text[1]}
        </h1>
        <p className="text-dark text-base font-medium text-[14px] lg:text-[18px] md:text-xl xl:text-xl mb-[10px] leading-[26px] xxs:mb-[1rem] lg:mb-8">
          {paragraph}
        </p>
        <button className="text-lg w-full max-w-[249px] h-[48px] font-bold text-dark-pink border-2 rounded-md border-dark-pink mb-[1rem] md:mb-[14px] hover:bg-dark-pink hover:text-white transition-all ease-in-out duration-500">
          {button}
        </button>
      </div>
    </div>
  );
};

export default Field;
