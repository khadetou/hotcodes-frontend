import React from "react";
import Image from "next/image";
import Mobile1 from "/public/images/mobile/mobile1.png";
import Mobile2 from "/public/images/mobile/mobile2.png";
import Mobile3 from "/public/images/mobile/mobile3.png";
import Appstore from "/public/images/mobile/appstore.png";
import Playstore from "/public/images/mobile/playstore.png";
import PlayApp from "/public/images/mobile/playApp.png";
import Scrolldown from "/public/images/mobile/scrollarrow.svg";
import Shape1 from "/public/images/mobile/shape1.svg";
import Shape2 from "/public/images/mobile/shape2.svg";
import { useTranslation } from "next-i18next";
import Field from "./field";

const Presentation = () => {
  const { t } = useTranslation("mobile");

  const presentations = [
    {
      textImg: Appstore,
      h1: t("ios.h1"),
      paragraph: t("ios.p"),
      button: t("presentation.design.button"),
      src: Mobile1,
      style: "lg:flex-row",
      flip: "",
    },
    {
      textImg: Playstore,
      h1: t("android.h1"),
      paragraph: t("android.p"),
      button: t("presentation.dev.button"),
      src: Mobile2,
      style: "lg:flex-row-reverse",
      flip: "flip-y",
    },
    {
      textImg: PlayApp,
      h1: t("hybrid.h1"),
      paragraph: t("hybrid.p"),
      button: t("presentation.marketing.button"),
      src: Mobile3,
      style: "lg:flex-row",
      flip: "",
    },
  ];

  return (
    <section className="mt-[148px] relative">
      <div className="absolute -z-10 -top-[5%] right-0">
        <Image src={Scrolldown} />
      </div>
      <div className="absolute -z-10 -top-[10%] right-0">
        <Image src={Shape1} />
      </div>
      <div className="absolute -z-10 top-[10%] left-0">
        <Image src={Shape2} />
      </div>
      <div className="containers">
        {presentations.map(
          ({ textImg, h1, paragraph, src, button, style, flip }, idx) => (
            <Field
              key={idx}
              src={src}
              h1={h1}
              textSrc={textImg}
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
