import Latest from "@/components/blogs/Latest";
import Line from "@/components/blogs/Line";
import Title from "@/components/blogs/Title";
import Titlebold from "@/components/Title/titlebold";

import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram, FiTwitter } from "react-icons/fi";

const Banner = () => {
  const [search, setSearch] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const Socials = [FiInstagram, FiTwitter, FaFacebookF, FaLinkedinIn];

  return (
    <section className="my-[160px] h-full">
      <div className="containers flex flex-col items-center justify-center">
        <Title />
        <Titlebold
          title="“ Blog ”"
          className="text-transparent bg-grad-text-2 bg-clip-text !mt-4 !leading-[1.2] md:!mt-0"
        />
        <p className="font-medium mt-3 text-lg text-gray text-center">
          Have complete access to all the news about tech and entrepreneurship
        </p>
        <label
          htmlFor="search"
          className={`max-w-[635px] p-4  block mt-14 w-full h-[88px] md:h-[111px] rounded-2xl md:rounded-[23px] bg-[#ffffff]  mb-[36px] relative shadow-shadow-sm`}
        >
          <label
            htmlFor="search"
            className="absolute top-1/2 -translate-y-1/2 left-6 md:left-9"
          >
            <BsSearch className="text-dark" size="20" />
          </label>

          <input
            onChange={onChange}
            type="text"
            name="search"
            id="search"
            placeholder="search"
            className={`bg-[#f5f5f5] focus:border placeholder:text-base placeholder:xxs:text-[18px] placeholder:font-normal focus:border-[#e293d3] focus:ring-0 border-none focus:shadow-input focus:shadow-[#e9aede] w-full h-full rounded-[13px] outline-none px-[40px] md:px-[60px] py-2 text-dark text-lg md:text-[22px] font-medium  `}
          />

          <button
            type="button"
            className="text-sm md:text-base font-bold text-white max-w-[80px] md:max-w-[96px] w-full max-h-[47px] md:max-h-[51px] h-full rounded-[13px] bg-dark-pink absolute top-1/2 -translate-y-1/2 right-5 md:right-9"
          >
            GO
          </button>
        </label>

        <div className="flex max-w-[381px] w-full justify-between mt-[30px]">
          {Socials.map((Social, index) => (
            <div
              key={index}
              className="w-full hover:shadow-shadow cursor-pointer flex justify-center items-center max-w-[60px] rounded-[16px] hover:text-dark-pink hover:scale-125 text-dark h-[60px] shadow-shadow-sm transition-all ease-in-out duration-700"
            >
              <Social size="25px" />
            </div>
          ))}
        </div>

        <Latest />
      </div>
      <Line />
    </section>
  );
};

export default Banner;
