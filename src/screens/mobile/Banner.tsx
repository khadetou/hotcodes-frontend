import Image from "next/image";
import { useTranslation } from "next-i18next";
import MobileBanner from "/public/images/mobile/bannerImg.png";
const Banner = () => {
  const { t } = useTranslation("mobile");

  return (
    <section className="md:h-[890px] h-[600px] flex items-center bg-grad-back blend relative mb-[160px] ">
      <div className="flex  flex-col items-center justify-center  containers">
        <div className="max-w-[1113px] w-full mb-4 mt-[189px] ">
          <h1 className="text-white text-center mt-0 md:mt-[220px]  w-full text-[32px] leading-[1.2] xxs:text-[40px] md:text-[40px] xs:text-[46px] lg:text-[64px]  2xl:text-[80px]  2xl:leading-none  font-bold">
            {t("banner.h1")}
          </h1>
          <p className="text-white text-center m-auto  xl:leading-snug text-[14px] leading-[1.2] xs:text-[20px] font-light text-lg mb-5 mt-[10px] sm:my-[20px] xl:font-medium  max-w-[877px]">
            {t("banner.p")}
          </p>
        </div>
        <div className="-mb-[65px] mt-[24px]  md:mb-0   xxs:mt-[10px] ">
          <div className="w-full">
            <Image src={MobileBanner} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
