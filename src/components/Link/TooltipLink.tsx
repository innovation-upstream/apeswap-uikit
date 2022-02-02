import React from "react";
import { Flex, LinkProps, ThemeUIStyleObject } from "theme-ui";
import { BrowserRouter as Router, Link } from "react-router-dom";
import TooltipLinkIco from "../ThemeUI/IconSVG/icons/TooltipLinkIco";
import style from "../ThemeUI/TooltipBubble/styles";

interface Props extends LinkProps {
  url: string;
}

const styles: Record<string, ThemeUIStyleObject> = {
  linkWrapper: {
    justifyContent: "center",
    gap: 3,
    alignItems: "center",
    fontWeight: "bold",
    textDecoration: "underline",
    svg: {
      fill: "brown",
      path: "brown",
    },
  }
  }

const TooltipLink: React.FC<Props> = ({ url, children }) => {
  return (
    <Router>
      <Link to={url}>
        <Flex sx={styles.linkWrapper}>
          {children}
          <TooltipLinkIco />
        </Flex>
      </Link>
    </Router>
  );
};

export default TooltipLink;
