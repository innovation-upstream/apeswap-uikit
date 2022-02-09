import React from "react";
import { Button } from "theme-ui";
import { IconSVG } from "../IconSVG";
import { IconButtonProps, iconButtonVariants as variants } from "./types";
import style from "./styles";
import colorValues from "../../theme/Apeswap/types";


const TextIconButton: React.FC<IconButtonProps> = ({
  variant = variants.PRIMARY,
  children,
  color = colorValues.brown,
  backgroundColor = colorValues.lvl2,
  ...props
}) => {
  return (
    <Button
      {...props}
      sx={
        variant === variants.TRANSPARENT
          ? style.transparent
          : { backgroundColor, color, ...style.default, ...style.flex }
      }
    >
      {children}
    </Button>
  );
};

export default TextIconButton;
