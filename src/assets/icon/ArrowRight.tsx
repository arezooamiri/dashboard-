import React from "react";

const ArrowRightSvg = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.7045 4.28395C13.3111 3.89633 12.678 3.90102 12.2904 4.29443C11.9027 4.68783 11.9074 5.32098 12.3008 5.7086L17.6712 11H4C3.44771 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H17.6646L12.3008 18.2849C11.9074 18.6725 11.9027 19.3057 12.2904 19.6991C12.678 20.0925 13.3111 20.0972 13.7045 19.7095L20.6287 12.8871C21.1256 12.3975 21.1256 11.5959 20.6287 11.1063L13.7045 4.28395Z"
        fill="#27292C"
      />
    </svg>
  );
};
export default ArrowRightSvg;
