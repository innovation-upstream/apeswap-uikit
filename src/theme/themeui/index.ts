import type { Theme } from "theme-ui";
import Colors from "./colors";
import baseTheme, { breakpointMap } from "./base";

const themeUI: Theme = {
  ...baseTheme,
  colors: Colors,
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      color: "text",
      bg: "background",
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
    nav: {
      breakpoints: [`@media screen and (min-width: ${breakpointMap.lg}px)`],
    },
  },
  buttons: {
    primary: {
      fontFamily: "titan",
      color: "#fff",
      bg: "primary",
      "&:hover": {
        bg: "text",
        cursor: "pointer",
      },
    },
    secondary: {
      color: "#000",
      bg: "#DAA628",
    },
  },
};

export { themeUI as default };
