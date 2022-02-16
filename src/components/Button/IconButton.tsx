import React from "react";
import { Button } from "theme-ui";
import { IconSVG } from "../IconSVG";
import { icons } from "../IconSVG/types";
import { IconButtonProps, iconButtonVariants as variants } from "./types";
import style from "./styles";
import colorValues from "../../theme/Apeswap/types";

const IconButton: React.FC<IconButtonProps> = ({
  icon = icons.SEND,
  color = colorValues.white1,
  variant = variants.PRIMARY,
  px = "10px",
  py = "10px",
  width,
  sx,
  ...props
}) => {
  const baseStyle =
    variant === variants.TRANSPARENT
      ? style.transparent
      : { variant: `buttons.${variant}`, padding: `${py} ${px}`, ...style[`${variant}`] };
  return (
    <Button
      {...props}
      sx={{
        ...baseStyle,
        ...sx,
      }}
    >
      <IconSVG color={color} icon={icon} {...props} width={width} />
    </Button>
  );
};

export default IconButton;
