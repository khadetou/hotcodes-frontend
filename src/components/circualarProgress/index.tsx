import React, { FC } from "react";

interface CircualarProgressProps {
  className?: string;
  circleOneClassName?: string;
  circleTwoClassName?: string;
  strokeDasharray?: string;
  strokeDashoffset?: string;
}
const CircurlarProgress: FC<CircualarProgressProps> = ({
  className,
  circleOneClassName,
  circleTwoClassName,
  strokeDasharray,
  strokeDashoffset,
}) => {
  return (
    <svg className={className}>
      <circle
        className={circleOneClassName}
        strokeWidth="3"
        stroke="currentColor"
        fill="transparent"
        r="30"
        cx="40"
        cy="40"
      />
      <circle
        className={circleTwoClassName}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        stroke="currentColor"
        fill="transparent"
        r="30"
        cx="40"
        cy="40"
      />
    </svg>
  );
};

CircurlarProgress.defaultProps = {
  className: "w-20 h-20",
  circleOneClassName: "text-gray-400 dark:text-gray-600",
  circleTwoClassName: "text-blue-500",
  strokeDasharray: "360",
  strokeDashoffset: "200",
};

export default CircurlarProgress;
