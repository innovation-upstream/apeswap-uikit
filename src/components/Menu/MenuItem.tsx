import React from "react";
import { Flex, NavLink } from "theme-ui";
import { IconSVG } from "../IconSVG";
import { Text } from "../Text";
import MenuItemDropdown from "./MenuItemDropdown";
import styles from "./styles";

const MenuItem: React.FC<any> = ({ item }) => {
  const { label, icon, url, children } = item;

  if (children) {
    return <MenuItemDropdown item={item} />;
  }

  return (
    <NavLink as="li" sx={{ ...styles.menuItem }} href={url} p={2}>
      <Flex sx={{ alignItems: "center", columnGap: "10px" }}>
        <Flex sx={{ justifyContent: "flex-end" }}>
          <IconSVG width={24} icon={icon} />
        </Flex>
        <Flex sx={{ justifyContent: "flex-end" }}>
          <Text sx={{ color: "brown" }}>{label}</Text>
        </Flex>
      </Flex>
    </NavLink>
  );
};

export default MenuItem;
