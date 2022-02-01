export const icons = {
  CARET: "caret",
  EXTERNAL: "external",
  TWITTER: "twitter",
  SEND: "send",
} as const;

export const directions = {
  LEFT: "left",
  RIGHT: "right",
  UP: "up",
  DOWN: "down",
} as const;

type iconTypes = typeof icons[keyof typeof icons];
type directionTypes = typeof directions[keyof typeof directions];

export interface IconSVGProps {
  icon?: iconTypes;
  direction?: directionTypes;
  color?: string;
  width?: string | number;
}
