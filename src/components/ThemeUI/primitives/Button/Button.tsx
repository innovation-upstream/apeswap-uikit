import React from "react";
import { Button as ThemeUIButton } from "theme-ui";
import { UIButtonProps, variants, buttonFontSizes, buttonPadding, sizes } from "./Button.interface";

const Button: React.FC<UIButtonProps> = ({
  variant = variants.PRIMARY,
  sx,
  size = sizes.MEDIUM,
  children,
  ...props
}) => {
  return (
    <ThemeUIButton
      {...props}
      sx={{
        ...sx,
        variant: `buttons.${variant}`,
        fontSize: buttonFontSizes[size],
        px: buttonPadding[size].x,
        py: buttonPadding[size].y,
      }}
    >
      {children}
    </ThemeUIButton>
  );
};

export default Button;
