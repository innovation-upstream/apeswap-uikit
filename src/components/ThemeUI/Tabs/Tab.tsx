import React from "react";
import { Button } from "theme-ui";
import styles from "./styles";
import { tabFontSizes, tabPadding, TabProps } from "./Tab.interface";

const Tab: React.FC<TabProps> = ({ activeTab, onClick, index, label, size = "normal" }) => {
  return (
    <Button
      sx={{
        ...styles.tab,
        fontSize: tabFontSizes[size],
        padding: tabPadding[size],
        background: activeTab === index ? "yellow" : "transparent",
      }}
      onClick={() => onClick(index)}
    >
      {label}
    </Button>
  );
};

export default Tab;
