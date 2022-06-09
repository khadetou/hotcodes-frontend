import React, { FC } from "react";

interface BlogIconIconProps {
  className?: string;
  size?: number | string;
  pathname?: string;
}

const SearchIcon: FC<BlogIconIconProps> = ({ className, size, pathname }) => {
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
        d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      />
      <path
        fill="currentColor"
        opacity="0.4"
        d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
      />
    </svg>
  );
};

SearchIcon.defaultProps = {
  className: "w-4 h-4",
  size: "",
  pathname: "",
};

export default SearchIcon;
