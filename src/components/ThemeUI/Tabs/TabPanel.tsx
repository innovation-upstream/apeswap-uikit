import React from "react";
import { Box } from "theme-ui";
import styles from "./styles";
import { TabPanelProps } from "./TabPanel.interface";

const TabPanel: React.FC<TabPanelProps> = ({ children, index, activeTab }) => {
  return activeTab === index ? <Box sx={{ ...styles.tabPanel }}>{children}</Box> : null;
};

export default TabPanel;
