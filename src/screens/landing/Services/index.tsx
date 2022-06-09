import { useTranslation } from "next-i18next";
import Design from "/public/images/designs.svg";
import Dev from "/public/images/developement.svg";
import Marketing from "/public/images/speaker.svg";
import React from "react";
import Title from "../../../components/Title/title";
import Card from "./card";

const Service = () => {
  const { t } = useTranslation("common");

  const services = [
    {
      title: t("services.design.title"),
      paragraph: t("services.design.p"),
      src: Design,
      data: "zoom-out-up",
    },
    {
      title: t("services.dev.title"),
      paragraph: t("services.dev.p"),
      src: Dev,
      data: "zoom-out-down",
    },
    {
      title: t("services.marketing.title"),
      paragraph: t("services.marketing.p"),
      src: Marketing,
      data: "zoom-out-up",
    },
  ];
  return (
    <section>
      <div className="containers flex flex-col items-center">
        <Title
          title={t("services.h1")}
          p={t("services.p")}
          className="text-transparent bg-clip-text bg-grad-text-1"
        />
        <div className="flex justify-between items-center  flex-col lg:flex-row">
          {services.map(({ title, paragraph, src, data }, idx) => (
            <div key={idx} className="card">
              <Card data={data} src={src} title={title} paragraph={paragraph} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
