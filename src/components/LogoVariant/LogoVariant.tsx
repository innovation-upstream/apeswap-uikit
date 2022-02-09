import React from "react";
import { Box } from "theme-ui";
import { IconSVG } from "../IconSVG";
import { icons } from "../IconSVG/types";
import style from "./styles";

export interface Props {
    colorMode?: "light" | "dark";
}

const LogoVariant: React.FC<Props> = ({colorMode = "light"}) => {
    return (
      <Box sx={style.container}>
        <IconSVG icon={colorMode === "light" ? icons.LOGOLIGHT : icons.LOGODARK} />
      </Box>
    );
}

export default LogoVariant;