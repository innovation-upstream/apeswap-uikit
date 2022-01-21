import { CardProps } from "theme-ui";

export const variants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
} as const;

type variantProps = typeof variants[keyof typeof variants];

export interface UICardProps extends CardProps {
  variant?: variantProps;
}
