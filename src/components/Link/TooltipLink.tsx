import React from "react";
import { Flex, LinkProps, ThemeUIStyleObject, Link } from "theme-ui";
import { IconSVG } from "../ThemeUI/IconSVG";

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
  },
};

const TooltipLink: React.FC<Props> = ({ url, children, ...props }) => {
  return (
    <Flex sx={styles.linkWrapper}>
      <Link href={url} {...props}>
        {children}
      </Link>
      <IconSVG icon="external" color="brown" />
    </Flex>
  );
};

export default TooltipLink;
