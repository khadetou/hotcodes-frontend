import React from "react";
import Image from "next/image";
import Optimization from "/public/images/web/Optimization.svg";
import Responsive from "/public/images/web/Responsive.svg";
import Pwa from "/public/images/web/Pwa.svg";
import Bg2 from "/public/images/web/bg2.svg";
import Bg3 from "/public/images/web/bg3.svg";
import Bg4 from "/public/images/web/bg4.svg";

import { useTranslation } from "next-i18next";
import Field from "./field";

const Presentation = () => {
  const { t } = useTranslation("web");

  const presentations = [
    {
      h1: t("section.optimization.title"),
      paragraph: t("section.optimization.p"),
      src: Optimization,
      style: "lg:flex-row-reverse",
      flip: "",
    },
    {
      h1: t("section.responsive.title"),
      paragraph: t("section.responsive.p"),
      button: t("section.responsive.button"),
      src: Responsive,
      style: "lg:flex-row",
      flip: "flip-y max-w-[709px] ",
    },
    {
      h1: t("section.progressive.title"),
      paragraph: t("section.progressive.p"),
      button: t("presentation.marketing.button"),
      src: Pwa,
      style: "lg:flex-row-reverse",
      flip: "",
    },
  ];

  return (
    <section className=" relative">
      <div className="containers ">
        {presentations.map(
          ({ h1, paragraph, src, button, style, flip }, idx) => (
            <Field
              key={idx}
              src={src}
              h1={h1}
              paragraph={paragraph}
              button={button!}
              style={style}
              flip={flip}
            />
          )
        )}

        <div className="absolute left-0 -z-10 top-[28%]">
          <Image src={Bg2} />
        </div>

        <div className="absolute right-0 -z-10 top-[30%]">
          <Image src={Bg3} />
        </div>

        <div className="absolute left-0 -z-10 top-[100%]">
          <Image src={Bg4} />
        </div>
      </div>
    </section>
  );
};

export default Presentation;
