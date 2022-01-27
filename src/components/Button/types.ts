import { ButtonProps as ThemeUIButtonProps } from "theme-ui";

export const sizes = {
  SMALL: "sm",
  MEDIUM: "md",
  LARGE: "lg",
} as const;

export const buttonFontSizes = {
  [sizes.SMALL]: 1,
  [sizes.MEDIUM]: 3,
  [sizes.LARGE]: 6,
};

export const buttonPadding = {
  [sizes.SMALL]: { x: 7, y: 1 },
  [sizes.MEDIUM]: { x: 15, y: 4 },
  [sizes.LARGE]: { x: 16, y: 6 },
};

export const variants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
} as const;

export type sizeProps = typeof sizes[keyof typeof sizes];
export type variantProps = typeof variants[keyof typeof variants];

export interface ButtonProps extends ThemeUIButtonProps {
  variant?: variantProps;
  size?: sizeProps;
}
