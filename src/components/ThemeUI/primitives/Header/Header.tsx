/** @jsxImportSource theme-ui */
import React from "react";
import { Heading } from "theme-ui";

const Header: React.FC = () => {
  return (
    <>
      <Heading sx={{ variant: "styles.h1" }}>H1 text</Heading>
      <Heading sx={{ variant: "styles.h2" }}>H2 text</Heading>
      <Heading sx={{ variant: "styles.h3" }}>H3 text</Heading>
      <Heading sx={{ variant: "styles.h4" }}>H4 text</Heading>
      <Heading sx={{ variant: "styles.h5" }}>H5 text</Heading>
      <Heading sx={{ variant: "styles.bannerTitle" }}>BANNER TITLE STYLE</Heading>
    </>
  );
};

export default Header;
