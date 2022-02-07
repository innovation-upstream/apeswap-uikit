import React from "react";
import { Flex } from "theme-ui";
import styles from "./styles";
import { MenuProps } from "./types";

const Menu: React.FC<MenuProps> = ({ children }) => {
  return <Flex sx={{ ...styles.menu }}>{children}</Flex>;
};

export default Menu;
