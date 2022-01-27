import { TextProps as ThemeUITextProps } from "theme-ui";
import { colorProps } from "../../theme/Apeswap/types";

export const variants = {
  SMALL: "sm",
  NORMAL: "md",
  LARGE: "lg",
} as const;

export const weights = {
  LIGHT: "light",
  NORMAL: "normal",
  BOLD: "bold",
} as const;

type variantProps = typeof variants[keyof typeof variants];
type weightProps = typeof weights[keyof typeof weights];

export interface TextProps extends ThemeUITextProps {
  variant?: variantProps;
  weight?: weightProps;
  color?: colorProps;
}
