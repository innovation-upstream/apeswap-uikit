import { TextProps } from "theme-ui";

export const variants = {
  SMALL: "small",
  NORMAL: "normal",
  LARGE: "large",
} as const;

export const weights = {
  LIGHT: "light",
  NORMAL: "normal",
  BOLD: "bold",
} as const;

type variantProps = typeof variants[keyof typeof variants];
type weightProps = typeof weights[keyof typeof weights];

export interface UITextProps extends TextProps {
  variant?: variantProps;
  weight?: weightProps;
}
