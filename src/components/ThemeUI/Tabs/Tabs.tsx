import React, { useState, useEffect } from "react";
import { Box } from "theme-ui";
import { TabsProps } from "./Tabs.interface";
import styles from "./styles";
import Tab from "./Tab";

const Tabs: React.FC<TabsProps> = ({ children, activeTab, onChange }) => {
  const [currentTab, setCurrentTab] = useState(activeTab);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  return (
    <Box sx={{ ...styles.tabs, background: "lvl1" }}>
      {Array.isArray(children) ? (
        children.map((child) => (
          <Tab
            index={child.props.index}
            currentTab={currentTab}
            label={child.props.label}
            setCurrentTab={setCurrentTab}
          />
        ))
      ) : (
        <Tab
          index={children.props.index}
          currentTab={currentTab}
          label={children.props.label}
          setCurrentTab={setCurrentTab}
        />
      )}
    </Box>
  );
};

export default Tabs;
