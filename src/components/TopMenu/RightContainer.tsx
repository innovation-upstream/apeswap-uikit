import React from "react";
import { Box } from "theme-ui";
import style from "./styles";

const LeftContainer: React.FC = ({ children }) => {
  return (
    <Box sx={style.rightContainer}>
        {children}
    </Box>
  );
};

export default LeftContainer;
