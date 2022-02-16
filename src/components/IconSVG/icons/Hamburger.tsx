/** @jsxImportSource theme-ui */
import React from "react";
import { IconProps, rotation } from "./types";

const Hamburger: React.FC<IconProps> = ({ direction = "down", color = "brown", width, getStyles }) => {
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
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M1.77,15H21.21c1,0,1.76-.56,1.76-1.25s-.79-1.25-1.76-1.25H1.77c-1,0-1.77.56-1.77,1.25S.8,15,1.77,15ZM2.3,8.75H20.67c1.27,0,2.3-.56,2.3-1.25s-1-1.25-2.3-1.25H2.3C1,6.25,0,6.81,0,7.5S1,8.75,2.3,8.75ZM0,1.25C0,1.94.8,2.5,1.77,2.5H21.21c1,0,1.76-.56,1.76-1.25S22.18,0,21.21,0H1.77C.8,0,0,.56,0,1.25Z" />
        </g>
      </g>
    </svg>
  );
};

export default Hamburger;
