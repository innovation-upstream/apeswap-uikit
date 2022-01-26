import React from "react";
import { Text as ThemeUIText } from "theme-ui";
import { UITextProps, weights, variants } from "./Text.interface";

const Text: React.FC<UITextProps> = ({
  variant = variants.NORMAL,
  weight = weights.NORMAL,
  children,
  color,
  sx,
  ...props
}) => {
  return (
    <ThemeUIText {...props} sx={{ ...sx, variant: `text.${variant}`, color, fontWeight: weight }}>
      {children}
    </ThemeUIText>
  );
};

export default Text;
