/** @jsxImportSource theme-ui */
import React from "react";
import { SvgProps, rotation } from "./types";

const Collapse: React.FC<SvgProps> = ({ direction = "down", color = "text", width, getStyles }) => {
  const deg: rotation = {
    left: 90,
    up: 180,
    right: 270,
    down: 0,
  };
  const style = getStyles({
    degree: deg[direction as keyof rotation],
    color,
  });

  return (
    <svg width={width || "23"} viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg" sx={style}>
      <path
        d="M1.27783 15.5H15.0278C15.7153 15.5 16.2778 14.9375 16.2778 14.25C16.2778 13.5625 15.7153 13 15.0278 13H1.27783C0.590332 13 0.027832 13.5625 0.027832 14.25C0.027832 14.9375 0.590332 15.5 1.27783 15.5ZM1.27783 9.25H11.2778C11.9653 9.25 12.5278 8.6875 12.5278 8C12.5278 7.3125 11.9653 6.75 11.2778 6.75H1.27783C0.590332 6.75 0.027832 7.3125 0.027832 8C0.027832 8.6875 0.590332 9.25 1.27783 9.25ZM0.027832 1.75C0.027832 2.4375 0.590332 3 1.27783 3H15.0278C15.7153 3 16.2778 2.4375 16.2778 1.75C16.2778 1.0625 15.7153 0.5 15.0278 0.5H1.27783C0.590332 0.5 0.027832 1.0625 0.027832 1.75ZM21.6528 11.6L18.0528 8L21.6528 4.4C22.1403 3.9125 22.1403 3.125 21.6528 2.6375C21.1653 2.15 20.3778 2.15 19.8903 2.6375L15.4028 7.125C14.9153 7.6125 14.9153 8.4 15.4028 8.8875L19.8903 13.375C20.3778 13.8625 21.1653 13.8625 21.6528 13.375C22.1278 12.8875 22.1403 12.0875 21.6528 11.6Z"
        fill="#4D4040"
      />
    </svg>
  );
};

export default Collapse;
