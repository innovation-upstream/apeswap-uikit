import React from "react";
import { Box } from "theme-ui";
import { TabsProps, variants } from "./Tabs.interface";
import styles, { dynamicStyles } from "./styles";

const Tabs: React.FC<TabsProps> = ({ children, variant = variants.CENTERED }) => {
  const tabsVariantStyles = dynamicStyles.tabsVariantStyles(variant);

  return <Box sx={{ ...styles.tabs, ...tabsVariantStyles }}>{children}</Box>;
};

export default Tabs;
