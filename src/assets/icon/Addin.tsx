import React from "react";

const AddingSvg = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" fill="white" />
      <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#C0C6CD" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 10.6667C16.3681 10.6667 16.6666 10.9651 16.6666 11.3333V15.3333L20.6666 15.3333C21.0348 15.3333 21.3333 15.6318 21.3333 16C21.3333 16.3682 21.0348 16.6667 20.6666 16.6667L16.6666 16.6667L16.6666 20.6667C16.6666 21.0349 16.3681 21.3333 16 21.3333C15.6318 21.3333 15.3333 21.0349 15.3333 20.6667L15.3333 16.6667H11.3333C10.9651 16.6667 10.6666 16.3682 10.6666 16C10.6666 15.6318 10.9651 15.3333 11.3333 15.3333H15.3333V11.3333C15.3333 10.9651 15.6318 10.6667 16 10.6667Z"
        fill="#27292C"
      />
    </svg>
  );
};
export default AddingSvg;
