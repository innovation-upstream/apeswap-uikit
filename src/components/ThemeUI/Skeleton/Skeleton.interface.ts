import { BoxProps } from "theme-ui";

export const animation = {
  WAVES: "waves",
  PULSE: "pulse",
} as const;

export const variant = {
  RECT: "rect",
  CIRCLE: "circle",
} as const;

type Animation = typeof animation[keyof typeof animation];
type Variant = typeof variant[keyof typeof variant];

export interface UISkeletonProps extends BoxProps {
  animation?: Animation;
  variant?: Variant;
  width?: string;
  height?: string;
}
