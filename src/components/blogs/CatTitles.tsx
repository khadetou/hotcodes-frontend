import Link from "next/link";
import { FC } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";

interface CatTitlesProps {
  className?: string;
}

const CatTitles: FC<CatTitlesProps> = ({ className }) => {
  return (
    <div className="mb-[53px] containers flex justify-between">
      <div className="flex items-center justify-between w-full max-w-[160px] md:max-w-[300px]">
        <h1 className="text-dark text-xl md:text-4xl font-semibold">
          Developement
        </h1>
        <div className={`w-2 h-2 bg-dark-pink rounded-full ${className}`}></div>
      </div>
      <Link passHref href="/blogs/category">
        <button
          type="button"
          className="flex w-full max-w-[150px] md:max-w-[210px] items-center justify-between text-dark-pink"
        >
          <span className="text-sm md:text-[18px] font-normal">
            See all the articles
          </span>
          <BsArrowRightCircleFill className="ml-[5px] text-xl md:text-[35px]" />
        </button>
      </Link>
    </div>
  );
};

export default CatTitles;
