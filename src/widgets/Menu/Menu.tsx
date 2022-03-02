import React, { useContext } from "react";
import { Flex } from "theme-ui";
import MenuContext from "./MenuContext";
import MenuBody from "./MenuBody";
import MenuItem from "./MenuItem";
import MenuFooter from "./MenuFooter";
import styles from "./styles";

const Menu: React.FC & {
  Body: React.FC;
  Item: React.FC<any>;
  Footer: React.FC;
} = ({ children }) => {
  const { collapse } = useContext(MenuContext);

  return (
    <Flex
      sx={{
        ...styles.menu,
        width: collapse ? [0, 0, "56px"] : "240px",
      }}
    >
      {children}
    </Flex>
  );
};

Menu.Body = MenuBody;
Menu.Item = MenuItem;
Menu.Footer = MenuFooter;

export default Menu;
