/** @jsxImportSource theme-ui */
import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { Box, Flex, NavLink, Text } from "theme-ui";
import { Icon } from "../../components/Icon";
import MenuContext from "./MenuContext";
import styles from "./styles";
import { MenuLinkProps } from "./types";

const MenuLink: React.FC<MenuLinkProps> = ({ item, children, component = NavLink, componentProps = {} }) => {
  const { label, icon } = item;
  const { active, collapse, setCollapse } = useContext(MenuContext);

  const isActive = item.path === active;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setCollapse(false);
    return setOpen((prev) => !prev);
  };

  const Element = component;

  return (
    <Box>
      <Flex
        sx={{
          ...styles.menuLinkContainer,
          boxShadow: isActive ? "rgb(175, 110, 90) 4px 0px 0px inset" : "",
        }}
      >
        <Element {...componentProps} sx={styles.link} onClick={handleClick}>
          <Flex sx={{ alignItems: "center" }}>
            <Flex sx={{ flexShrink: 0 }}>
              <Icon width={24} icon={icon} />
            </Flex>
            <Flex sx={{ flexShrink: 0, marginLeft: "10px" }}>
              <Text sx={styles.text}>{label}</Text>
            </Flex>
          </Flex>

          {children && (
            <Box sx={{ display: collapse ? "none" : null }}>
              <Icon icon="caret" direction={open ? "up" : "down"} />
            </Box>
          )}
        </Element>
      </Flex>

      <AnimatePresence>
        {children && open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "fit-content" }}
            transition={{ height: { duration: 0.3 } }}
            exit={{ height: 0 }}
            sx={{ overflow: "hidden" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default MenuLink;
