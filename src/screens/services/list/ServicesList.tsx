import { useState, useRef } from "react";
import Bigcards from "@/components/Bigcards";
import Ui from "/public/images/services/ui.svg";
import marketing from "/public/images/services/marketing.svg";
import web from "/public/images/services/web.svg";
import mobile from "/public/images/services/mobile.svg";
import React from "react";
import reactjs from "/public/images/tools/reactjs.svg";
import angular from "/public/images/tools/angular.svg";
import nextjs from "/public/images/tools/nextjs.svg";
import vuejs from "/public/images/tools/vuejs.svg";
import javascript from "/public/images/tools/javascript.svg";
import html from "/public/images/tools/html.svg";
import css from "/public/images/tools/css.svg";
import tailwind from "/public/images/tools/tailwind.svg";

import Image from "next/image";
import ai from "/public/images/tools/ai.svg";
import xd from "/public/images/tools/xd.svg";
import framer from "/public/images/tools/framer.svg";
import figma from "/public/images/tools/figma.svg";
import photoshop from "/public/images/tools/photoshop.svg";
import Titlebold from "@/components/Title/titlebold";
import Subtitle from "@/components/Title/subtitle";

import ae from "/public/images/tools/ae.svg";
import premierepro from "/public/images/tools/premierepro.svg";
import blender from "/public/images/tools/blender.svg";

import laravel from "/public/images/tools/laravel.svg";
import php from "/public/images/tools/php.svg";
import nodejs from "/public/images/tools/nodejs.svg";
import mongodb from "/public/images/tools/mongodb.svg";
import mysql from "/public/images/tools/mysql.svg";
import postgres from "/public/images/tools/postgres.svg";
import nestjs from "/public/images/tools/nestjs.svg";

import apple from "/public/images/tools/apple.svg";
import android from "/public/images/tools/android.svg";

import pwa from "/public/images/tools/pwa.svg";
import flutter from "/public/images/tools/flutter.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SmallCards from "@/components/smallcards";
import vidbg from "/public/videos/vid-bg.png";
import { IoPlayCircleOutline, IoPauseCircleOutline } from "react-icons/io5";
import { useTranslation } from "next-i18next";

const ServicesList = () => {
  const { t } = useTranslation("service");
  const hybrid = [
    {
      title: "PWA",
      image: pwa,
      desc: t("serviceList.tools.hybrid.pwa"),
    },
    {
      title: "ReactJS",
      image: reactjs,
      desc: t("serviceList.tools.hybrid.reactnative"),
    },
    {
      title: "Flutter",
      image: flutter,
      desc: t("serviceList.tools.hybrid.flutter"),
    },
  ];

  const mobileDev = [
    {
      title: "Apple",
      image: apple,
      desc: t("serviceList.tools.mobiledev.xcode"),
    },
    {
      title: "Android",
      image: android,
      desc: t("serviceList.tools.mobiledev.androidstudio"),
    },
  ];

  const backend = [
    {
      title: "Laravel",
      image: laravel,
      desc: t("serviceList.tools.backend.laravel"),
    },
    {
      title: "PHP",
      image: php,
      desc: t("serviceList.tools.backend.php"),
    },
    {
      title: "NodeJS",
      image: nodejs,
      desc: t("serviceList.tools.backend.nodejs"),
    },
    {
      title: "MongoDB",
      image: mongodb,
      desc: t("serviceList.tools.backend.mongodb"),
    },
    {
      title: "MySQL",
      image: mysql,
      desc: t("serviceList.tools.backend.mysql"),
    },
    {
      title: "PostgreSQL",
      image: postgres,
      desc: t("serviceList.tools.backend.postgres"),
    },
    {
      title: "NestJS",
      image: nestjs,
      desc: t("serviceList.tools.backend.nestjs"),
    },
  ];

  const services = [
    {
      title: t("serviceList.design.title"),
      toptitle: t("serviceList.design.topTitle"),
      subtitle: t("serviceList.design.subTitle"),
      link: "/orders/design",
      image: Ui,
    },
    {
      title: t("serviceList.marketing.title"),
      toptitle: t("serviceList.marketing.topTitle"),
      subtitle: t("serviceList.marketing.subTitle"),
      link: "/orders/marketing",
      image: marketing,
    },
    {
      title: t("serviceList.web.title"),
      toptitle: t("serviceList.web.topTitle"),
      subtitle: t("serviceList.web.subTitle"),
      link: "/orders/web",
      image: web,
    },
    {
      title: t("serviceList.mobile.title"),
      toptitle: t("serviceList.mobile.topTitle"),
      subtitle: t("serviceList.mobile.subTitle"),
      link: "/orders/mobile",
      image: mobile,
    },
  ];
  const DesignTools = [
    {
      title: "Illustrator",
      image: ai,
      desc: t("serviceList.tools.design.illustrator"),
    },
    {
      title: "XD",
      image: xd,
      desc: t("serviceList.tools.design.xd"),
    },
    {
      title: "Framer",
      image: framer,
      desc: t("serviceList.tools.design.framer"),
    },
    {
      title: "Figma",
      image: figma,
      desc: t("serviceList.tools.design.figma"),
    },
    {
      title: "Photoshop",
      image: photoshop,
      desc: t("serviceList.tools.design.photoshop"),
    },
  ];

  const frontend = [
    {
      title: "ReactJS",
      image: reactjs,
      desc: t("serviceList.tools.frontend.react"),
    },
    {
      title: "Angular",
      image: angular,
      desc: t("serviceList.tools.frontend.angular"),
    },
    {
      title: "NextJS",
      image: nextjs,
      desc: t("serviceList.tools.frontend.nextjs"),
    },
    {
      title: "VueJS",
      image: vuejs,
      desc: t("serviceList.tools.frontend.vue"),
    },
    {
      title: "JavaScript",
      image: javascript,
      desc: t("serviceList.tools.frontend.javascript"),
    },
    {
      title: "HTML",
      image: html,
      desc: t("serviceList.tools.frontend.html"),
    },
    {
      title: "CSS",
      image: css,
      desc: t("serviceList.tools.frontend.css"),
    },
    {
      title: "TailwindCSS",
      image: tailwind,
      desc: t("serviceList.tools.frontend.tailwind"),
    },
  ];

  const animations = [
    {
      title: "AE",
      image: ae,
      desc: t("serviceList.tools.animation.ae"),
    },

    {
      title: "Blender",
      image: blender,
      desc: t("serviceList.tools.animation.blender"),
    },
    {
      title: "PP",
      image: premierepro,
      desc: t("serviceList.tools.animation.premiere"),
    },
  ];

  const [play, setPlay] = useState(false);
  const playRef = useRef<HTMLVideoElement | null>(null);

  const setPlayVideo = () => {
    if (playRef.current) {
      playRef.current.play();
    }
  };

  const setPauseVideo = () => {
    if (playRef.current) {
      console.log(playRef);
      playRef.current.pause();
    }
  };

  return (
    <section className="mb-[160px]">
      <div className="mt-[80px] lg:mt-[160px] flex flex-col items-center">
        <div className="containers grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {services.map(({ title, toptitle, subtitle, image, link }, index) => (
            <div key={index}>
              <Bigcards
                toptitle={toptitle}
                image={image}
                subtitle={subtitle}
                title={title}
                link={link}
              />
            </div>
          ))}
        </div>
        <Titlebold
          title={t("serviceList.title.design.h1")}
          className=" leading-[88px] md:-mb-3"
          pclassName="md:mt-[22px]"
          p={t("serviceList.title.design.p")}
        />
        <Subtitle sub1="Ux/Ui" sub2="Design tools" className="md:mt-4" />
      </div>
      <Swiper
        className="!h-[586px] md:mt-[15px] mb-[80px] "
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          1025: {
            slidesPerView: 4,
          },
          821: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          539: {
            slidesPerView: 2,
          },
        }}
      >
        {DesignTools.map(({ title, image, desc }, index) => (
          <SwiperSlide key={index}>
            <SmallCards
              p={desc}
              src={image}
              title={title}
              className="mb-[30px]"
              link={t("banner.btn")}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`containers  flex flex-col items-center relative  w-full max-h-[86%] pointer-events-none h-auto -mb-[14px]`}
      >
        <Subtitle sub1="Animation" sub2="tools" className="mb-4" />
        <div className="h-auto relative w-full my-0 mx-auto  hidden md:block max-w-[1301px] ">
          <Image src={vidbg} />
          <div className="h-auto absolute  -z-20 left-1/2 w-full -translate-x-1/2 my-0 mx-auto max-w-[1301px] top-[0.25%]">
            <video
              src="/videos/bg-video1.mp4"
              muted
              playsInline
              ref={playRef}
              autoPlay
              onPlay={() => setPlay(false)}
              onPause={() => setPlay(true)}
              loop
              className="w-[83.9%] m-auto align-[initial] object-contain"
            />
          </div>
          <div className="absolute top-[69%] text-white z-20 text-[50px] right-[15%] ">
            {play ? (
              <IoPlayCircleOutline onClick={setPlayVideo} />
            ) : (
              <IoPauseCircleOutline onClick={setPauseVideo} />
            )}
          </div>
        </div>
        <div className="flex  flex-wrap">
          {animations.map(({ title, image, desc }, index) => (
            <SmallCards
              key={index}
              p={desc}
              src={image}
              title={title}
              className="mb-[30px]"
              link={t("banner.btn")}
            />
          ))}
        </div>
        <Titlebold
          title={t("serviceList.title.web.h1")}
          className=" leading-[88px] md:-mb-3"
          pclassName="md:mt-[22px]"
          p={t("serviceList.title.web.p")}
        />
        <Subtitle sub1="Frontend" sub2="tools" className="md:mt-4" />
      </div>
      <Swiper
        className="!h-[586px] md:mt-[15px] mb-[80px] "
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          1025: {
            slidesPerView: 4,
          },
          821: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          539: {
            slidesPerView: 2,
          },
        }}
      >
        {frontend.map(({ title, image, desc }, index) => (
          <SwiperSlide key={index}>
            <SmallCards
              p={desc}
              src={image}
              title={title}
              className="mb-[30px]"
              link={t("banner.btn")}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="containers flex items-center justify-center">
        <Subtitle sub1="Backend" sub2="tools" className="md:mt-4" />
      </div>
      <Swiper
        className="!h-[586px] md:mt-[15px] mb-[80px] "
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          1025: {
            slidesPerView: 4,
          },
          821: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          539: {
            slidesPerView: 2,
          },
        }}
      >
        {backend.map(({ title, image, desc }, index) => (
          <SwiperSlide key={index}>
            <SmallCards
              p={desc}
              src={image}
              title={title}
              className="mb-[30px]"
              link={t("banner.btn")}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="containers flex flex-col items-center justify-center">
        <Titlebold
          title={t("serviceList.title.mobile.h1")}
          className=" leading-[88px] md:-mb-3"
          pclassName="md:mt-[22px]"
          p={t("serviceList.title.mobile.p")}
        />
        <Subtitle sub1="Native" sub2="Apps" className="md:mt-4" />
        <div className="flex flex-wrap">
          {mobileDev.map(({ title, image, desc }, index) => (
            <SmallCards
              key={index}
              p={desc}
              src={image}
              title={title}
              className="mb-[30px] mr-5"
              link={t("banner.btn")}
            />
          ))}
        </div>
        <Subtitle sub1="Hybrid" sub2="Apps" className="md:mt-4" />
        <div className="flex flex-wrap">
          {hybrid.map(({ title, image, desc }, index) => (
            <SmallCards
              key={index}
              p={desc}
              src={image}
              title={title}
              className="mb-[30px] mr-5"
              link={t("banner.btn")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
