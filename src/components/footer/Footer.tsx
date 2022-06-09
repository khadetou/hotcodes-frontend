import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Logo from "/public/images/hotcodes-dark.svg";
import { useTranslation } from "next-i18next";
const Footer = () => {
  const { t } = useTranslation("footer");
  const footer = [
    {
      title: t("about.title"),
      links: [
        {
          text: t("about.about1"),
          link: "/about",
        },
        {
          text: t("about.about2"),
          link: "/products",
        },
        {
          text: "Blogs",
          link: "/blog",
        },
      ],
    },
    {
      title: t("company.title"),
      links: [
        {
          text: t("company.company1"),
          link: "/parteners",
        },
        {
          text: t("company.company2"),
          link: "/careers",
        },
        {
          text: t("company.company3"),
          link: "/contact",
        },
      ],
    },
    {
      title: "Contact",
      links: [
        {
          text: "Castors 01",
          link: "tel:+96650505050",
        },
        {
          text: "+221338239085",
          link: "tel:+221338239085",
        },
        {
          text: "hotcodes@gmail.com",
          link: "mailto",
        },
      ],
    },
  ];

  const footerLogos = [
    {
      title: "Youtube",
      link: "https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw",
      image: <FaFacebookF size="18px" />,
    },
    {
      title: "Facebook",
      link: "https://www.facebook.com/Castors-105589715590546/",
      image: <FaInstagram size="18px" />,
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/castors.co/",
      image: <FaTwitter size="18px" />,
    },
    {
      title: "Twitter",
      link: "https://twitter.com/Castors_Co",
      image: <FaLinkedin size="18px" />,
    },
  ];

  return (
    <footer>
      <div className="containers">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-4 md:gap-10 lg:gap-20">
          <div>
            <div>
              <Image alt="logo" src={Logo} />
            </div>
            <p className="max-w-[290px] mb-[37px] mt-[26px] text-lg font-normal leading-[1.2] text-gray">
              {t("first")}
            </p>
            <div className="flex justify-between">
              {footerLogos.map(({ title, image }, idx) => (
                <div
                  key={idx}
                  className="border text-dark-pink hover:bg-dark-pink hover:text-white p-[13px] border-dark-pink rounded-full transition-all duration-300 ease-in-out "
                >
                  {image}
                </div>
              ))}
            </div>
          </div>
          {footer.map(({ title, links }, idx) => (
            <div key={idx}>
              <h3 className="text-2xl mb-[37px] font-bold text-dark">
                {title}
              </h3>
              {links.map(({ text, link }, idx) => (
                <div key={idx} className="text-gray  mb-[33px] ">
                  <a href={link}>{text}</a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-dark-pink flex mt-[56px] justify-center items-center">
        <p className="text-white text-sm  flex justify-center items-center text-center py-[12px]">
          Copyright hotcodes.com, All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
