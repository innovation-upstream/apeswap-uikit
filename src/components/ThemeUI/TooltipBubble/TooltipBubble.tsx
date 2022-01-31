import React from "react";
import { Box } from "theme-ui";
import { TooltipProps } from "./TooltipBubble.interface";
import style from "./styles";

const TooltipBubble: React.FC<TooltipProps> = ({variant=4, minWidth="300px", children}) => {

    return <Box sx={{minWidth, ...style[variant]}}>{children}</Box>
}

export default TooltipBubble;