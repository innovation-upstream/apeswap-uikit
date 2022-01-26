/** @jsxImportSource theme-ui */
import React from "react";
import { Heading as ThemeUIHeading } from "theme-ui";
import { HeadingProps } from "./Heading.interface";

const Heading: React.FC<HeadingProps> = ({ children, as, banner }) => {
  return (
    <ThemeUIHeading as={as} sx={{ variant: `styles.${banner ? "banner" : as || "h1"}` }}>
      {children}
    </ThemeUIHeading>
  );
};

export default Heading;
