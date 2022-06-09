import AOS from "aos";
import { useEffect } from "react";
import Charts from "react-apexcharts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import CountUp from "react-countup";
import shapes1 from "/public/images/shapes/01.png";
import shapes2 from "/public/images/shapes/02.png";
import shapes3 from "/public/assets/images/shapes/03.png";
import shapes4 from "/pubilc/assets/images/shapes/04.png";
import shapes5 from "/public/assets/images/shapes/05.png";
import Slider from "@/components/dashboard/Slider";
import { sliderItems } from "@/components/dashboard/arrays";
import GrossSales from "@/components/dashboard/charts/GrossSales";
import Chart from "@/components/dashboard/charts";

const DashboardScreen = () => {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      disable: function () {
        var maxWidth = 996;
        return window.innerWidth < maxWidth;
      },
      throttleDelay: 10,
      once: true,
      duration: 700,
      offset: 10,
    });
    //   customizer
    // const colorcustomizerMode = sessionStorage.getItem('color-customizer-mode');
    // const colorcustomizerinfoMode = sessionStorage.getItem('colorcustominfo-mode');
    // const colorcustomizerprimaryMode = sessionStorage.getItem('colorcustomprimary-mode');
    // if(colorcustomizerMode===null){
    //     props.ColorCustomizerAction(props.customizerMode, props.cololrinfomode, props.colorprimarymode);
    //     document.documentElement.style.setProperty('--bs-info', props.cololrinfomode );

    // }
    // else{
    //     props.ColorCustomizerAction(colorcustomizerMode, colorcustomizerinfoMode, colorcustomizerprimaryMode);
    //     document.documentElement.style.setProperty('--bs-info', colorcustomizerinfoMode);

    // }
  });

  const chart1 = {
    options: {
      chart: {
        fontFamily:
          '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: false,
        },
      },
      colors: ["blue", "red"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          minWidth: 19,
          maxWidth: 19,
          style: {
            colors: "#8A92A6",
          },
          offsetX: -5,
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        labels: {
          minHeight: 22,
          maxHeight: 22,
          show: true,
          style: {
            colors: "#8A92A6",
          },
        },
        lines: {
          show: false, //or just here to disable only x axis grids
        },
        categories: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug"],
      },
      grid: {
        show: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 0.4,
          opacityTo: 0.1,
          stops: [0, 50, 80],
          colors: ["blue", "red"],
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    series: [
      {
        name: "total",
        data: [94, 80, 94, 80, 94, 80, 94],
      },
      {
        name: "pipline",
        data: [72, 60, 84, 60, 74, 60, 78],
      },
    ],
  };

  //chart2
  const chart2 = {
    options: {
      chart: {
        height: 390,
        type: "radialBar",
      },
      colors: ["blue", "red"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 10,
            size: "50%",
          },
          track: {
            margin: 10,
            strokeWidth: "50%",
          },
          dataLabels: {
            show: false,
          },
        },
      },
      labels: ["Apples", "Oranges"],
    },
    series: [55, 75],
  };

  //chart3
  const chart3 = {
    options: {
      chart: {
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      colors: ["blue", "red"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "28%",
          endingShape: "rounded",
          borderRadius: 5,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["S", "M", "T", "W", "T", "F", "S", "M", "T", "W"],
        labels: {
          minHeight: 20,
          maxHeight: 20,
          style: {
            colors: "#8A92A6",
          },
        },
      },
      yaxis: {
        title: {
          text: "",
        },
        labels: {
          minWidth: 19,
          maxWidth: 19,
          style: {
            colors: "#8A92A6",
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
    series: [
      {
        name: "Successful deals",
        data: [30, 50, 35, 60, 40, 60, 60, 30, 50, 35],
      },
      {
        name: "Failed deals",
        data: [40, 50, 55, 50, 30, 80, 30, 40, 50, 55],
      },
    ],
  };

  return (
    <section className="my-[160px] h-full">
      <div>
        <Swiper
          className="relative flex flex-row LR"
          slidesPerView={5}
          spaceBetween={32}
          modules={[Navigation]}
          breakpoints={{
            320: { slidesPerView: 1 },
            550: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
            1500: { slidesPerView: 5 },
            1920: { slidesPerView: 6 },
            2040: { slidesPerView: 7 },
            2440: { slidesPerView: 8 },
          }}
          data-aos="fade-up"
          data-aos-delay="700"
        >
          {sliderItems.map(
            (
              {
                Icon,
                circleOneClassName,
                circleTwoClassName,
                className,
                price,
                strokeDasharray,
                strokeDashoffset,
                text,
              },
              idx
            ) => (
              <SwiperSlide key={idx} className="pt-0 pb-0 mb-8">
                <Slider
                  Icon={Icon}
                  circleOneClassName={circleOneClassName}
                  circleTwoClassName={circleTwoClassName}
                  className={className}
                  price={price}
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  text={text}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
      <Chart />
    </section>
  );
};

export default DashboardScreen;
