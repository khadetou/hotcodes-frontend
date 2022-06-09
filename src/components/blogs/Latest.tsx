import BlogImg from "/public/images/blog-img.png";
import Avatar from "/public/images/avatar/avatar.jpg";
import Image from "next/image";

const Latest = () => {
  return (
    <div className="hover:shadow-shadow hover:scale-105 transition-all ease-linear duration-300 mt-[78px]  flex flex-col justify-center items-center lg:justify-center lg:flex-row w-full p-4 h-[700px] md:h-[500px] rounded-3xl">
      <div className="lg:mr-10 h-full min-h-[260px] max-h-[200px] md:max-h-[450px]  xl:max-h-[492px] w-full max-w-[737px] relative ">
        <Image
          className="rounded-[20px] "
          alt="latest image"
          layout="fill"
          src={BlogImg}
        />
      </div>
      <div className="w-full max-w-[524px]">
        <div className="flex mt-[18px] w-full max-w-[177px] justify-between items-center">
          <button className="text-white font-bold bg-dark-pink max-w-[113px] w-full h-[36px] rounded-[5px] text-[12px]">
            Developement
          </button>
          <span className="h-1 w-1 bg-dark rounded-sm"></span>
          <p className="font-bold text-dark text-[15px]">10 min</p>
        </div>
        <h1 className="font-semibold text-xl xxs:text-[34px] text-dark leading-none mt-[18px]">
          The complete React developer 2022
        </h1>
        <p className="text-xl xxs:text-2xl font-normal leading-[29px] text-[#b2b2b2] w-full mt-[18px]">
          How to effectively use react in the best way ever telling you the best
          way and the best pluggins to use in 2022.
        </p>
        <div className="mt-[18px] items-center flex justify-between max-w-[157px] w-full">
          <Image
            className="rounded-full"
            src={Avatar}
            height={50}
            width={50}
            alt="Rounded avatar"
          />
          <p className="text-dark-pink underline font-bold text-lg">Hotcodes</p>
        </div>
      </div>
    </div>
  );
};

export default Latest;
