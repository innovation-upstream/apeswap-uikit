import React from "react";
import { Button as ThemeUIButton } from "theme-ui";
import { ButtonProps } from "./Button.interface";

const Button: React.FC<ButtonProps> = ({ variant, title }) => {
  return <ThemeUIButton sx={{ variant: `buttons.${variant}` }}>{title}</ThemeUIButton>;
};

export default Button;
