import React, { useState } from "react";
import { Button } from "theme-ui";
import styles from "./styles";

const Tab: React.FC<any> = ({ currentTab, onChange, setCurrentTab, index, label }) => {
  const handleClick = () => {
    setCurrentTab(index);
    // onChange(index);
  };

  return (
    <Button
      sx={{
        ...styles.tab,
        background: currentTab === index ? "yellow" : "transparent",
      }}
      onClick={handleClick}
    >
      {label}
    </Button>
  );
};

export default Tab;
