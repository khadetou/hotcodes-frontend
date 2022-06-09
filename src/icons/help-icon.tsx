import React, { FC } from "react";

interface BlogIconIconProps {
  className?: string;
  size?: number | string;
  pathname?: string;
}

const HelpIcon: FC<BlogIconIconProps> = ({ className, size, pathname }) => {
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
        d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
      />
    </svg>
  );
};

HelpIcon.defaultProps = {
  className: "w-4 h-4",
  size: "",
  pathname: "",
};

export default HelpIcon;
