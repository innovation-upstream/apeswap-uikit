import React from "react";
import { Button as ThemeUIButton } from "theme-ui";
import { dynamicStyles } from "./styles";
import { ButtonProps, variants, sizes } from "./types";

const Button: React.FC<ButtonProps> = ({ variant = variants.PRIMARY, sx, size = sizes.MEDIUM, children, ...props }) => {
  const backgroundStyles = dynamicStyles.backgroundStyles({ variant, size });

  return (
    <ThemeUIButton
      {...props}
      sx={{
        ...sx,
        ...backgroundStyles,
      }}
    >
      {children}
    </ThemeUIButton>
  );
};

export default Button;
