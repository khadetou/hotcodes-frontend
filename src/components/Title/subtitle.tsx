import React, { FC } from "react";

interface SubtitleProps {
  sub1: string;
  sub2: string;
  className?: string;
}
const Subtitle: FC<SubtitleProps> = ({ sub1, sub2, className }) => {
  return (
    <h2 className={`text-[34px] font-bold text-dark ${className && className}`}>
      {sub1}{" "}
      <span className="text-transparent bg-clip-text bg-grad-text-2">
        {sub2}
      </span>
    </h2>
  );
};

export default Subtitle;
