import React from "react";
import { Button as ThemeUIButton } from "theme-ui";
import { IButton } from "./Button.interface";

const Button: React.FC<IButton> = ({ variant, title }) => {
  return <ThemeUIButton sx={{ variant: `buttons.${variant}` }}>{title}</ThemeUIButton>;
};

export default Button;
