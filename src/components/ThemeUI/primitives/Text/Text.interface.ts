import { TextProps } from "theme-ui";

export const variants = {
  SMALL: "small",
  SMALLIGHT: "smallLight",
  SMALLBOLD: "smallBold",
  NORMAL: "normal",
  NORMALIGHT: "normalLight",
  NORMALBOLD: "normalBold",
  BIG: "big",
  BIGLIGHT: "bigLight",
  BIGBOLD: "bigBold",
} as const;

export const sizes = {
  SMALL: "small",
  NORMAL: "normal",
  BIG: "big",
} as const;

export const weights = {
  LIGHT: "Light",
  NORMAL: "Normal",
  BOLD: "Bold",
} as const;

type sizeProps = typeof sizes[keyof typeof sizes];
type weightProps = typeof weights[keyof typeof weights];
type variants = typeof variants[keyof typeof variants];

export interface UITextProps extends TextProps {
  variant?: variants;
}
