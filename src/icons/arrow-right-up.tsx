import React, { FC } from "react";

interface ArrowRightUpIconProps {
  className?: string;
  size?: number | string;
  title?: string;
}

const ArrowRightUp: FC<ArrowRightUpIconProps> = ({
  className,
  size,
  title,
}) => {
  return (
    <svg className={className} width={size} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"
      ></path>
    </svg>
  );
};

ArrowRightUp.defaultProps = {
  className: "absolute text-gray-600 card-slie-arrow",
  size: "24px",
  title: "",
};

export default ArrowRightUp;
