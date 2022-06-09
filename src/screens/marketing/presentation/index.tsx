import React, { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Traffic from "/public/images/marketing/traffic.png";
import TrafficFr from "/public/images/marketing/traffic-fr.png";
import Pay from "/public/images/marketing/indonesia.png";
import Audit from "/public/images/marketing/audit.png";
import Map from "/public/images/marketing/map.svg";

import { useTranslation } from "next-i18next";
import Field from "./field";

const Presentation: FC = () => {
  const { t } = useTranslation("marketing");
  const { locale } = useRouter();

  console.log(locale);

  const presentations = [
    {
      title: t("presentation.toptitle"),
      h1: t("presentation.title"),
      paragraph: t("presentation.p"),
      button: t("presentation.design.button"),
      src: locale === "en" ? Traffic : TrafficFr,
      style: "lg:flex-row-reverse",
      flip: "",
    },
    {
      title: t("presentation.exptoptitle"),
      h1: t("presentation.exptitle"),
      paragraph: t("presentation.exparagraph"),
      button: t("presentation.dev.button"),
      src: Pay,
      audit: Audit,
      style: "lg:flex-row",
      flip: "flip-y",
    },
  ];

  return (
    <section className="mt-[148px] relative">
      <div className="absolute top-0">
        <Image src={Map} />
      </div>
      <div className="containers">
        {presentations.map(
          ({ audit, title, h1, paragraph, src, button, style, flip }, idx) => (
            <Field
              key={idx}
              src={src}
              title={title}
              h1={h1}
              audit={audit}
              paragraph={paragraph}
              button={button}
              style={style}
              flip={flip}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Presentation;
