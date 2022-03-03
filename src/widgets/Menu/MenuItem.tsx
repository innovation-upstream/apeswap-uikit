/** @jsxImportSource theme-ui */
import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { Box, Flex, Text } from "theme-ui";
import { Icon } from "../../components/Icon";
import MenuContext from "./MenuContext";
import styles from "./styles";
import { MenuItemProps } from "./types";

const Container = ({ hasSubmenu, component, onClick, children, ...props }: any) => {
  if (hasSubmenu) {
    return (
      <Box {...props} onClick={onClick}>
        {children}
      </Box>
    );
  }

  return React.Children.map(component, (child) => {
    return React.cloneElement(child as any, {
      ...(child as any)?.props,
      children: React.Children.map(children, (c) => {
        return React.cloneElement(c as any, {
          ...(c as any)?.props,
          children: (child as any)?.props?.children,
          ...props,
        });
      }) as any,
      ...props,
    });
  }) as any;
};

const MenuItem: React.FC<MenuItemProps> = ({ label, icon, path, children, hasSubmenu, isSubmenu }) => {
  const { active, collapse, setCollapse } = useContext(MenuContext);

  const isActive = path === active;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setCollapse(false);
    setOpen((prev) => !prev);
  };

  if (isSubmenu) {
    return (
      <Flex
        onClick={handleClick}
        sx={{
          ...styles.MenuItemContainer,
          position: "relative",
          boxShadow: path === active ? "rgb(175, 110, 90) 4px 0px 0px inset" : "",
        }}
      >
        <Flex sx={styles.link}>
          <Flex sx={{ alignItems: "center" }}>
            <Flex sx={{ flexShrink: 0, marginLeft: "10px" }}>{children}</Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  }

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Flex
        sx={{
          ...styles.MenuItemContainer,
          boxShadow: isActive ? "rgb(175, 110, 90) 4px 0px 0px inset" : "",
        }}
      >
        <Flex sx={styles.link} onClick={handleClick}>
          <Flex sx={{ alignItems: "center" }}>
            <Flex sx={{ flexShrink: 0 }}>
              {typeof icon === "string" ? <Icon width={24} icon={icon as any} /> : icon}
            </Flex>
            <Flex sx={{ flexShrink: 0, marginLeft: "10px" }}>
              {hasSubmenu ? <Text sx={styles.text}>{label}</Text> : children}
            </Flex>
          </Flex>

          {hasSubmenu && (
            <Box sx={{ display: collapse ? "none" : null }}>
              <Icon icon="caret" direction={open ? "up" : "down"} />
            </Box>
          )}
        </Flex>
      </Flex>

      <AnimatePresence>
        {hasSubmenu && children && open && (
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

export default MenuItem;
