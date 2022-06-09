import React from "react";
import Team1 from "/public/images/about/team1.png";
import Image from "next/image";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "next-i18next";

const Card = () => {
  const Socials = [FiInstagram, FiTwitter, FaFacebookF, FaLinkedinIn];
  const { t } = useTranslation("about");
  return (
    <div className="w-full max-w-[413px] h-[575px] bg-white rounded-[25px] p-[15px] shadow-shadow-sm">
      <div>
        <Image src={Team1} />
      </div>
      <div>
        <h1 className="text-dark text-[34px] mt-[38px] mb-[16px] text-center font-bold">
          Khadetou Dianifabe
        </h1>
        <h4 className="uppercase text-[27px] font-semibold text-center text-gray">
          {t("team.job")}
        </h4>
      </div>
      <div className="flex justify-between mt-[30px]">
        {Socials.map((Social, index) => (
          <div
            key={index}
            className="w-full hover:shadow-shadow cursor-pointer flex justify-center items-center max-w-[60px] rounded-[16px] transition-all duration-300  hover:!scale-105 hover:text-dark-pink text-dark h-[60px] shadow-shadow-sm"
          >
            <Social size="25px" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
