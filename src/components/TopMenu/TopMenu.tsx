/** @jsxImportSource theme-ui */
import React from "react";
import { BoxProps } from "theme-ui";
import style from "./styles";

const TopMenu: React.FC<BoxProps> = ({ children }) => {
  return <nav sx={style.nav}>{children}</nav>;
};

export default TopMenu;
