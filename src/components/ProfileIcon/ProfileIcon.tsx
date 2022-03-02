import React from "react";
import { Box, useColorMode } from "theme-ui";
import { Icon } from "../Icon";
import { icons } from "../Icon/types";
import style from "./styles";

const ProfileIcon: React.FC = () => {
  const [colorMode] = useColorMode();
  return (
    <Box sx={style.container}>
      <Icon icon={colorMode === "light" ? icons.PROFILELIGHT : icons.PROFILEDARK} />
    </Box>
  );
};

export default ProfileIcon;
