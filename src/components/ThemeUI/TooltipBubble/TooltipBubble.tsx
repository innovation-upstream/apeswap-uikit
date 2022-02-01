import React from "react";
import { Box } from "theme-ui";
import { TooltipProps } from "./TooltipBubble.interface";
import style from "./styles";

const TooltipBubble: React.FC<TooltipProps> = ({
  variant = "4",
  maxWidth = "250px",
  direction = "bottomRight",
  children,
}) => {
  return <Box sx={{ maxWidth, ...style[variant], ...style[`${direction}`] }}>{children}</Box>;
};

export default TooltipBubble;
