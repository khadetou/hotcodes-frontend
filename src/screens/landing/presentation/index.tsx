import React from "react";

import UiDesign from "/public/images/uidesign.png";
import UiFloat from "/public/images/uiux.svg";
import Dev from "/public/images/softwaredev.png";
import FloatDev from "/public/images/deve.svg";
import Marketing from "/public/images/digitalmarketing.png";
import FloatMarketing from "/public/images/marketingdig.svg";

import { useTranslation } from "next-i18next";
import Field from "./field";

const Presentation = () => {
  const { t } = useTranslation("common");

  const presentations = [
    {
      title: t("presentation.design.title"),
      h1: t("presentation.design.h1"),
      paragraph: t("presentation.design.p"),
      button: t("presentation.design.button"),
      src: UiDesign,
      fsrc: UiFloat,
      fsrcStyle:
        "absolute z-10 left-[0%] -translate-x-1/2 top-1/2 -translate-y-1/2",
      style: "lg:flex-row",
      flip: "",
      data: "fade-up",
      dataos: "fade-down",
    },
    {
      title: t("presentation.dev.title"),
      h1: t("presentation.dev.h1"),
      paragraph: t("presentation.dev.p"),
      button: t("presentation.dev.button"),
      src: Dev,
      fsrc: FloatDev,
      fsrcStyle:
        "absolute z-10 left-[0] 2xl:right-[0] -translate-x-1/2 lg:top-[45%] lg:right-[18%] lg:left-[inherit]  2xl:translate-x-1/2 top-1/2 -translate-y-1/2",
      style: "lg:flex-row-reverse",
      flip: "flip-y",
      data: "fade-down",
      dataos: "fade-top",
    },
    {
      title: t("presentation.marketing.title"),
      h1: t("presentation.marketing.h1"),
      paragraph: t("presentation.marketing.p"),
      button: t("presentation.marketing.button"),
      src: Marketing,
      fsrc: FloatMarketing,
      fsrcStyle:
        "absolute z-10 left-[0%] -translate-x-1/2 top-1/2 -translate-y-1/2",
      style: "lg:flex-row",
      flip: "",
      data: "fade-up",
      dataos: "fade-down",
    },
  ];

  return (
    <section className="mt-[148px]">
      <div className="containers">
        {presentations.map(
          (
            {
              title,
              h1,
              paragraph,
              src,
              fsrc,
              button,
              style,
              fsrcStyle,
              flip,
              data,
              dataos,
            },
            idx
          ) => (
            <Field
              key={idx}
              src={src}
              title={title}
              h1={h1}
              fsrc={fsrc}
              paragraph={paragraph}
              button={button}
              style={style}
              fsrcStyle={fsrcStyle}
              flip={flip}
              data={data}
              dataos={dataos}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Presentation;
