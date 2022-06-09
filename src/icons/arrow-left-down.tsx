import { FC } from "react";

interface ArrowLeftDownIconProps {
  className?: string;
  size?: number | string;
  title?: string;
}

const ArrowLeftDown: FC<ArrowLeftDownIconProps> = ({
  className,
  size,
  title,
}) => {
  return (
    <svg className={className} width={size} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z"
      ></path>
    </svg>
  );
};

ArrowLeftDown.defaultProps = {
  className: "absolute text-gray-600 card-slie-arrow",
  size: "24px",
  title: "",
};

export default ArrowLeftDown;
