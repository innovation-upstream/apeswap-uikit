import { CardProps } from "theme-ui";
import { colorProps } from "../../../../theme/Apeswap/types";

export const variants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
} as const;

type variantProps = typeof variants[keyof typeof variants];

export interface UICardProps extends CardProps {
  variant?: variantProps;
  background?: colorProps;
}
