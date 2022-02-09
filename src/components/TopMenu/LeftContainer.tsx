import React from "react";
import { Box } from "theme-ui";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { IconButton } from "../Button";
import style from "./styles";

const LeftContainer: React.FC = ({ children }) => {
  return (
    <Box sx={style.leftContainer}>
      {children}
      <Router>
        <Link to="/">
          <IconButton as="div" variant="transparent" icon="textLogo" />
        </Link>
      </Router>
    </Box>
  );
};

export default LeftContainer;
