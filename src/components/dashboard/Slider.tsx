import ArrowRightUp from "@/icons/arrow-right-up";
import { FC } from "react";
import CircualarProgress from "../circualarProgress";

interface SliderProps {
  iconClassName?: string;
  circleOneClassName?: string;
  circleTwoClassName?: string;
  strokeDasharray?: string;
  strokeDashoffset?: string;
  className?: string;
  size?: string;
  text?: string;
  price?: string;
  Icon?: any;
}

const Slider: FC<SliderProps> = ({
  circleOneClassName,
  circleTwoClassName,
  className,
  strokeDasharray,
  strokeDashoffset,
  text,
  price,
  Icon,
}) => {
  return (
    <div className="relative flex flex-col overflow-hidden bg-white rounded-lg shadow-lg dark:bg-dark-card">
      <div className="flex-shrink-0 p-6 RL">
        <div className="flex items-center">
          <div className="inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 ltr:left-5 rtl:right-5">
            <CircualarProgress
              circleOneClassName={circleOneClassName}
              circleTwoClassName={circleTwoClassName}
              className={className}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
            />
            <Icon />
          </div>
          <div className="ml-6 rtl:ml-0 rtl:mr-6 ">
            <p className="mb-2 text-gray-600 dark:text-gray-600">{text}</p>
            <h4
              className="text-2xl font-medium dark:text-gray-600 counter"
              style={{ visibility: "visible" }}
            >
              ${price}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

Slider.defaultProps = {
  text: "Total Sales",
  price: "560K",
  Icon: ArrowRightUp,
};

export default Slider;
