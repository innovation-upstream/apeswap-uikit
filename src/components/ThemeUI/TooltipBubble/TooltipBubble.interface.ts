import { BoxProps } from "theme-ui";

export const directions = {
  BOTTOM_RIGHT: "bottomRight",
  BOTTOM_LEFT: "bottomLeft",
  TOP_RIGHT: "topRight",
  TOP_LEFT: "topLeft",
} as const;

type directionProps = typeof directions[keyof typeof directions];

export interface TooltipProps extends BoxProps {
  variant?: "1" | "2" | "3" | "4";
  maxWidth?: string;
  position?: "fixed" | "absolute"
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
}
