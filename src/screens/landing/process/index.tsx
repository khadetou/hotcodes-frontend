import { Fragment } from "react";
import Title from "../../../components/Title/title";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import ProcesImg from "/public/images/process/processtext.svg";
import ProcessImgfr from "/public/images/process/processtextfr.svg";
import Slider from "@/components/slider";

const Process = () => {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  return (
    <Fragment>
      <section className="containers flex flex-col items-center mb-[160px] ">
        <Title
          title={t("process.h1")}
          p={t("process.p")}
          className="text-transparent bg-grad-text-2 bg-clip-text "
        />

        <div className="mt-[51px]">
          <div className=" hidden md:block">
            {locale === "en" ? (
              <Image src={ProcesImg} className="flex items-center" />
            ) : (
              <Image src={ProcessImgfr} className="flex items-center" />
            )}
          </div>
        </div>
      </section>

      <Slider />
    </Fragment>
  );
};

export default Process;
