import React from "react";
import { Box } from "theme-ui";
import { TabsProps } from "./Tabs.interface";
import styles from "./styles";

const Tabs: React.FC<TabsProps> = ({ children }) => {
  return <Box sx={{ ...styles.tabs, background: "lvl1" }}>{children}</Box>;
};

export default Tabs;
