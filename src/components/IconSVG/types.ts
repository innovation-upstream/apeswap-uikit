export enum icons {
  CARET = "caret",
  EXTERNAL = "external",
  HOME = "home",
  CALCULATOR = "calculator",
  FARM = "farm",
  FRAME = "frame",
  GNANA = "gnana",
  INFO = "info",
  MORE = "more",
  NFA = "nfa",
  POOL = "pool",
  ROCKET = "rocket",
  TRADE = "trade",
  VAULT = "vault",
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
