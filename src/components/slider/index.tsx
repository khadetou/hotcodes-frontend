import SmallCards from "../smallcards";
import { useTranslation } from "next-i18next";
import Goal from "/public/images/process/goal.svg";
import Design from "/public/images/process/design.svg";
import Developement from "/public/images/process/production.svg";
import Result from "/public/images/process/result.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Slider = () => {
  const { t } = useTranslation("common");

  const slides = [
    {
      title: t("process.cards.1.title"),
      text: t("process.cards.1.p"),
      img: Goal,
    },
    {
      title: t("process.cards.2.title"),
      text: t("process.cards.2.p"),
      img: Design,
    },
    {
      title: t("process.cards.3.title"),
      text: t("process.cards.3.p"),
      img: Developement,
    },
    {
      title: t("process.cards.4.title"),
      text: t("process.cards.4.p"),
      img: Result,
    },
  ];

  return (
    <Swiper
      className="mt-[15px] !h-[650px] block md:hidden"
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      centeredSlidesBounds={true}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        541: {
          slidesPerView: 2,
        },
      }}
    >
      {slides.map(({ title, img, text }, index) => (
        <SwiperSlide key={index}>
          <SmallCards title={title} p={text} src={img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
