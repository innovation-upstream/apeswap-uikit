import React from "react";
import { Button as ThemeUIButton } from "theme-ui";
import { UIButtonProps, variants } from "./Button.interface";

const Button: React.FC<UIButtonProps> = ({ variant = variants.PRIMARY, sx, children, ...props }) => {
  return (
    <ThemeUIButton {...props} sx={{ ...sx, variant: `buttons.${variant}` }}>
      {children}
    </ThemeUIButton>
  );
};

export default Button;
