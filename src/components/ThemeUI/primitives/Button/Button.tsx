import React from "react";
import { Button as ThemeUIButton } from "theme-ui";
import { UIButtonProps, variants, buttonFontSizes, buttonPadding } from "./Button.interface";

const Button: React.FC<UIButtonProps> = ({ variant = variants.PRIMARY, sx, size = "normal", children, ...props }) => {
  return (
    <ThemeUIButton
      {...props}
      sx={{
        ...sx,
        variant: `buttons.${variant}`,
        fontSize: buttonFontSizes[size],
        padding: buttonPadding[size],
      }}
    >
      {children}
    </ThemeUIButton>
  );
};

export default Button;
