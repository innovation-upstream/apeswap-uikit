import React from "react";
import { Button } from "theme-ui";

interface PropTypes {
  variant: "primary" | "secondary";
  title: string;
}

const ThemeUIButton: React.FC<PropTypes> = ({ variant, title }) => {
  return <Button sx={{ variant: `buttons.${variant}` }}>{title}</Button>;
};

export default ThemeUIButton;
