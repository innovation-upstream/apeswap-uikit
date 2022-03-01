import React from "react";
import { Box } from "theme-ui";
import { Text } from "../Text";
import { sizes, TabProps, variants } from "./types";
import styles from "./styles";

const Tab: React.FC<TabProps> = React.forwardRef(
  ({ onClick, index, label, size = sizes.MEDIUM, variant = variants.CENTERED }, ref) => {
    return (
      <Box
        ref={ref as any}
        sx={{
          ...styles.tab,
          flex: variant === variants.FULLWIDTH ? 1 : undefined,
        }}
        onClick={() => onClick(index)}
      >
        <Text variant="sm" weight="bold">
          {label}
        </Text>
      </Box>
    );
  }
);

export default Tab;
