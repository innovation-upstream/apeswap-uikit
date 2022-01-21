import React from "react";
import { Text } from "theme-ui";
import { UITextProps, variants } from "./Text.interface";

const ThemeUIText: React.FC<UITextProps> = ({ variant = variants.NORMAL, children, sx, ...props }) => {
  return (
    <Text {...props} sx={{ ...sx, variant: `text.${variant}` }}>
      {children}
    </Text>
  );
};

export default ThemeUIText;
