import { ButtonProps } from "theme-ui";

export const size = {
  SMALL: "small",
  MEDIUM: "normal",
  BIG: "large",
} as const;

export const buttonFontSizes = {
  [size.SMALL]: 8,
  [size.MEDIUM]: 16,
  [size.BIG]: 32,
};

export const buttonPadding = {
  [size.SMALL]: "5px 16px",
  [size.MEDIUM]: "10px 32.5px",
  [size.BIG]: "20px 65px",
};

export const variants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
} as const;

type sizeProps = typeof size[keyof typeof size];
type variantProps = typeof variants[keyof typeof variants];

export interface UIButtonProps extends ButtonProps {
  variant?: variantProps;
  size?: sizeProps;
}
