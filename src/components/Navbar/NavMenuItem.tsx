/** @jsxImportSource theme-ui */
import React from "react";
import { Text } from "../Text";

const NavMenuItem: React.FC = ({ children }) => {
  return (
    <li sx={{ cursor: "pointer" }}>
      <Text sx={{ fontWeight: "bold", fontSize: 2 }} color="brown">
        {children}
      </Text>
    </li>
  );
};

export default NavMenuItem;
