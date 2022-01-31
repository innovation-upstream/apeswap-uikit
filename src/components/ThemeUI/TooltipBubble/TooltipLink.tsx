import React from "react";
import { Flex, Box, LinkProps } from "theme-ui";
import { BrowserRouter as Router, Link } from "react-router-dom";
import TooltipLinkIco from "../IconSVG/icons/TooltipLinkIco";
import style from "./styles";

interface Props extends LinkProps {
  url: string;
}

const TooltipLink: React.FC<Props> = ({ url, children }) => {
  return (
    <Router>
      <Link to={url}>
        <Flex sx={style.linkWrapper}>
          {children}
          <TooltipLinkIco />
        </Flex>
      </Link>
    </Router>
  );
};

export default TooltipLink;
