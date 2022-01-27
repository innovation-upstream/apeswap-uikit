import { CardProps as ThemeUICardProps } from "theme-ui";
import { colorProps } from "../../theme/Apeswap/types";

export const variants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
} as const;

type variantProps = typeof variants[keyof typeof variants];

export interface CardProps extends ThemeUICardProps {
  variant?: variantProps;
  background?: colorProps;
}
