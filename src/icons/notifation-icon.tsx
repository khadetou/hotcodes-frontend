import React, { FC } from "react";

interface BlogIconIconProps {
  className?: string;
  size?: number | string;
  pathname?: string;
}

const NotificationIcon: FC<BlogIconIconProps> = ({
  className,
  size,
  pathname,
}) => {
  return (
    <svg
      width={size}
      className={className}
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"
      />
      <path
        fill="currentColor"
        opacity={0.4}
        d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"
      />
    </svg>
  );
};

NotificationIcon.defaultProps = {
  className: "w-4 h-4",
  size: "",
  pathname: "",
};

export default NotificationIcon;
