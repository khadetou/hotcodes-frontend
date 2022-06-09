import { FC } from "react";

interface DotIconProps {
  className?: string;
  size?: number | string;
  title?: string;
}

const Dot: FC<DotIconProps> = ({ className, size, title }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <g>
        <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
      </g>
    </svg>
  );
};

Dot.defaultProps = {
  className: "absolute text-gray-600 card-slie-arrow",
  size: "12px",
  title: "",
};

export default Dot;
