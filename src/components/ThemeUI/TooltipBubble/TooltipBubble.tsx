import React from "react";
import { Box } from "theme-ui";
import { TooltipProps } from "./TooltipBubble.interface";
import style from "./styles";

const TooltipBubble: React.FC<TooltipProps> = ({ variant = 4, maxWidth = "250px", children }) => {
  return <Box sx={{ maxWidth, ...style[variant] }}>{children}</Box>;
};

export default TooltipBubble;
