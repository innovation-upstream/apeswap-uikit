export enum icons {
  CARET = "caret",
  EXTERNAL = "external",
  ERROR = "error",
  OPEN_NEW = "open-new",
}

export enum directions {
  LEFT = "left",
  RIGHT = "right",
  UP = "up",
  DOWN = "down",
}

type iconTypes = `${icons}`;
type directionTypes = `${directions}`;

export interface IconSVGProps {
  icon?: iconTypes;
  direction?: directionTypes;
  color?: string;
  width?: string | number;
}
