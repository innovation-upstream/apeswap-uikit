import React from "react";
import { Button } from "theme-ui";
import { IconButtonProps } from "./IconButton.interface";
import style from "./styles";

const IconButton: React.FC<IconButtonProps> = ({ children, variant = "primary" }) => {
  return (
    <Button sx={variant === "transparent" ? style.transparent : { variant: `buttons.${variant}`, ...style.default }}>
      {children}
    </Button>
  );
};

export default IconButton;
