/** @jsxImportSource theme-ui */
import React from "react";

const NavMenu: React.FC = ({ children }) => {
  return <ul sx={{ listStyle: "none", p: 0, display: "flex", alignItems: "center", gap: "70px" }}>{children}</ul>;
};

export default NavMenu;
