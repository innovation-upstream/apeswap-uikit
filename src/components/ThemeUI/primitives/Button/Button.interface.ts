import { ButtonProps } from "theme-ui";

export const sizes = {
  SMALL: "small",
  MEDIUM: "normal",
  BIG: "large",
} as const;

export const buttonFontSizes = {
  [sizes.SMALL]: 1,
  [sizes.MEDIUM]: 3,
  [sizes.BIG]: 6,
};

export const buttonPadding = {
  [sizes.SMALL]: { x: 7, y: 1 },
  [sizes.MEDIUM]: { x: 15, y: 4 },
  [sizes.BIG]: { x: 16, y: 6 },
};

export const variants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
} as const;

type sizeProps = typeof sizes[keyof typeof sizes];
type variantProps = typeof variants[keyof typeof variants];

export interface UIButtonProps extends ButtonProps {
  variant?: variantProps;
  size?: sizeProps;
}
