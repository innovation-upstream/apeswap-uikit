import { ButtonProps } from "theme-ui";

export const size = {
  SMALL: "small",
  MEDIUM: "medium",
  BIG: "big",
} as const;

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
