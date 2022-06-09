import { FC } from "react";
import { FaPlay } from "react-icons/fa";

interface CircularProps {
  className?: string;
}

const Circular: FC<CircularProps> = ({ className }) => {
  return (
    <button className={className}>
      <FaPlay className="xs:text-base lg:text-xl text-xs" />
    </button>
  );
};

export default Circular;
