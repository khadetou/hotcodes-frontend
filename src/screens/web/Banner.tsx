import Image from "next/image";
import { useTranslation } from "next-i18next";
import WebBanner from "/public/images/web/web-banner.png";
import Bg1 from "/public/images/web/bg1.svg";

const Banner = () => {
  const { t } = useTranslation("web");
  const splitText = t("banner.title").split(".");

  return (
    <>
      <section className="h-[890px] flex items-center  relative ">
        <div className="absolute -z-10 left-0 -top-5 w-[1700px] h-[2400px]">
          <Image src={Bg1} layout="responsive" />
        </div>
        <div className="flex flex-col items-center lg:flex-row translate-y-[-50%] md:mb-[50px] lg:mb-[110px] xsm:mb-[103px] lg:transform-none containers -mt-56">
          <div className="max-w-[734px] w-full mb-4 lg:mb-[-7.5rem]">
            <h1 className="text-dark  w-full text-[32px] leading-[1.2] xxs:text-[40px]  md:text-[40px] xs:text-[37px] lg:text-[64px] mb-[40px] 2xl:text-[76px]  2xl:leading-none  font-normal">
              <span className="text-transparent bg-clip-text bg-grad-text-1">
                {splitText[0]}
              </span>
              {splitText[1]}
            </h1>
            <p className="text-gray  xl:leading-snug text-[14px] leading-[1.2] xs:text-[18px] text-lg mb-5 mt-[10px] sm:my-[10px] font-medium  max-w-[541px]">
              {t("banner.p")}
            </p>
          </div>
          <div className=" md:w-[228px] -mb-[65px] mt-[24px] w-[278px] md:mb-0 lg:w-[691px] xxs:w-[370px] xxs:mt-[10px] ">
            <div className="absolute lg:top-1/2 lg:translate-y-[-65%] xl:translate-y-[-55%]  ">
              <Image src={WebBanner} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
