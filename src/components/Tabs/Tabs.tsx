import React, { useEffect, useRef, useState } from "react";
import { Box } from "theme-ui";
import { Button } from "../Button";
import { TabsProps, variants } from "./types";
import styles from "./styles";

const Tabs: React.FC<TabsProps> = ({ activeTab = 0, children, variant = variants.CENTERED }) => {
  const [label, setLabel] = useState<string>();
  const activeRef = useRef<any>(null);

  useEffect(() => {
    React.Children.forEach(children, (child) => {
      if ((child as any)?.props?.index === activeTab) {
        setLabel((child as any)?.props?.label);
      }
    });
  }, [activeTab, children]);

  return (
    <Box
      sx={{
        ...styles.tabs,
        justifyContent: variant === variants.CENTERED ? "center" : null,
      }}
    >
      <Box
        sx={{
          ...styles.tabUnderlay,
          width: variant === variants.FULLWIDTH ? "100%" : undefined,
        }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child as any, {
            ...(child as any)?.props,
            ref: (child as any)?.props?.index === activeTab ? activeRef : undefined,
          });
        })}
        <Button
          csx={{
            ...styles.tabButton,
            width: activeRef?.current?.getBoundingClientRect?.()?.width || "fit-content",
            left: activeRef?.current
              ? activeRef?.current?.getBoundingClientRect?.()?.x -
                activeRef?.current?.parentNode.getBoundingClientRect?.()?.x
              : 0,
          }}
        >
          {label}
        </Button>
      </Box>
    </Box>
  );
};

export default Tabs;
