import React, { useState } from "react";
import { Flex, NavLink } from "theme-ui";
import { IconSVG } from "../IconSVG";
import { Text } from "../Text";
import MenuItem from "./MenuItem";
import styles from "./styles";

const MenuItemDropdown: React.FC<any> = ({ item }) => {
  const { label, icon, url, children } = item;

  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <>
      <NavLink as="ul" sx={{ ...styles.menuItem, pb: "15px" }} p={2} href={url} onClick={handleClick}>
        <Flex sx={{ alignItems: "center", columnGap: "10px" }}>
          <Flex sx={{ justifyContent: "flex-end" }}>
            <IconSVG width={24} icon={icon} />
          </Flex>
          <Flex sx={{ flex: 2 }}>
            <Text sx={{ color: "brown" }}>{label}</Text>
          </Flex>
          <Flex sx={{ justifyContent: "flex-start" }}>
            <IconSVG icon="caret" direction={open ? "up" : "down"} />
          </Flex>
        </Flex>
      </NavLink>

      {children.map((child: any, index: number) => (
        <Flex sx={{ pl: "15px", display: !open ? "none" : "" }}>
          <MenuItem item={child} key={`${item}-${index + 1}`} />
        </Flex>
      ))}
    </>
  );
};

export default MenuItemDropdown;
