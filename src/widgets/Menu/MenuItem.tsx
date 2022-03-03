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
      children,
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
        sx={{
          ...styles.MenuItemContainer,
          boxShadow: path === active ? "rgb(175, 110, 90) 4px 0px 0px inset" : "",
        }}
      >
        <Container sx={styles.link} component={children} onClick={handleClick}>
          <Flex sx={{ alignItems: "center" }}>
            <Flex sx={{ flexShrink: 0, marginLeft: "10px" }}>
              <Text sx={styles.textStyles}>{label}</Text>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    );
  }

  return (
    <Box>
      <Flex
        sx={{
          ...styles.MenuItemContainer,
          boxShadow: isActive ? "rgb(175, 110, 90) 4px 0px 0px inset" : "",
        }}
      >
        <Container sx={styles.container} hasSubmenu={hasSubmenu} component={children} onClick={handleClick}>
          <Flex sx={styles.link}>
            <Flex sx={{ alignItems: "center" }}>
              <Flex sx={{ flexShrink: 0 }}>
                {typeof icon === "string" ? <Icon width={24} icon={icon as any} /> : icon}
              </Flex>
              <Flex sx={{ flexShrink: 0, marginLeft: "10px" }}>
                <Text sx={styles.text}>{label}</Text>
              </Flex>
            </Flex>

            {hasSubmenu && (
              <Box sx={{ display: collapse ? "none" : null }}>
                <Icon icon="caret" direction={open ? "up" : "down"} />
              </Box>
            )}
          </Flex>
        </Container>
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
