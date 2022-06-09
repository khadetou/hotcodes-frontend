import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import sideImage from "/public/images/sideimage.png";
import Circular from "@/components/button/circular";
import Video from "@/components/videos";
import { FC } from "react";

const Banner: FC<{ play?: boolean; setPlay?: any }> = ({ play, setPlay }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Video play={play} setPlay={setPlay} />
      <div
        onClick={() => setPlay(false)}
        className={`bg-black opacity-10 z-10 fixed top-0 left-0 right-0 bottom-0 ${
          play ? "block" : "hidden"
        }`}
      />

      <section className="h-[890px] flex items-center bg-grad-back blend relative ">
        <div className="flex  flex-col items-center lg:flex-row translate-y-[-50%] md:mb-[75px] xsm:mb-[103px] lg:transform-none containers -mt-9">
          <div className="max-w-[734px] mb-4 lg:mb-[-9.5rem]">
            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              className="text-white capitalize text-[32px] leading-[1.2] xxs:text-[40px]   md:text-[40px] xs:text-[47px] lg:text-[64px]  2xl:text-[101px]  2xl:leading-none  font-light"
            >
              {t("banner.h1")}
            </h1>

            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              className="text-white  xl:leading-snug text-[14px] leading-[1.2] xs:text-[18px] font-light text-lg mb-5 mt-[10px] sm:my-[10px] xl:font-medium  max-w-[635px]"
            >
              {t("banner.p")}
            </p>
            <div className="flex md:mt-6">
              <Link href="/services">
                <button
                  data-aos="zoom-out-left"
                  data-aos-duration="1000"
                  className="bg-white hover:scale-105 transition-all ease-linear duration-150 max-h-[50px] text-dark text-sm py-2 px-4 sm:text-base sm:px-10 sm:py-[11px] font-bold rounded-md shadow-btn"
                >
                  {t("banner.button")}
                </button>
              </Link>

              <div
                data-aos="zoom-out-right"
                data-aos-duration="1000"
                className="md:ml-6 xxs:ml-[13px] ml-[7px]"
                onClick={() => setPlay(true)}
              >
                <Circular className="rounded-full p-[12px] xxs:p-[11px] bg-white text-primary shadow-btn lg:p-4" />
                <span className="text-white xxs:text-[14px] md:text-base xs:text-[14px] font-normal ml-[5px] text-[10px] lg:text-lg lg:font-semibold uppercase">
                  {t("banner.video")}
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-[228px] -mb-[65px] mt-[24px] w-[278px] md:mb-0 lg:w-[691px] xxs:w-[370px] xxs:mt-[10px] ">
            <div className="absolute lg:top-1/2 lg:translate-y-[-36%]  ">
              <Image
                data-aos="fade-down"
                data-aos-duration="2500"
                alt="side image"
                src={sideImage}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
