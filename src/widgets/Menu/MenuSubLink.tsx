/** @jsxImportSource theme-ui */
import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { Box, Flex, NavLink, Text } from "theme-ui";
import { Icon } from "../../components/Icon";
import MenuContext from "./MenuContext";
import styles from "./styles";
import { MenuLinkProps } from "./types";

const MenuSubLink: React.FC<MenuLinkProps> = ({ label, icon, path, component = NavLink, componentProps = {} }) => {
  const { active } = useContext(MenuContext);

  const Element = component;

  return (
    <Flex
      sx={{
        ...styles.menuLinkContainer,
        boxShadow: path === active ? "rgb(175, 110, 90) 4px 0px 0px inset" : "",
      }}
    >
      <Element {...componentProps} sx={styles.link}>
        <Flex sx={{ alignItems: "center" }}>
          <Flex sx={{ flexShrink: 0, marginLeft: "10px" }}>
            <Text sx={styles.textStyles}>{label}</Text>
          </Flex>
        </Flex>
      </Element>
    </Flex>
  );
};

export default MenuSubLink;
