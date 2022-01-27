import React from "react";
import { Button } from "theme-ui";
import styles, { dynamicStyles } from "./styles";
import { sizes, tabFontSizes, tabPadding, TabProps } from "./Tab.interface";

const Tab: React.FC<TabProps> = ({ activeTab, onClick, index, label, size = sizes.MEDIUM, variant }) => {
  const tabVariantStyles = dynamicStyles.tabVariantStyles(variant);

  return (
    <Button sx={{ ...styles.tabUnderlay, ...tabVariantStyles }}>
      <Button
        sx={{
          ...styles.tab,
          ...tabVariantStyles,
          fontSize: `${tabFontSizes[size]}px`,
          padding: tabPadding[size],
          background: activeTab === index ? "yellow" : "transparent",
        }}
        onClick={() => onClick(index)}
      >
        {label}
      </Button>
    </Button>
  );
};

export default Tab;
