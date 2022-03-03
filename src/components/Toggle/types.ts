import { InputHTMLAttributes } from "react";

export enum sizes {
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
}

export const togglePadding = {
  [sizes.SMALL]: { x: 9, y: 2 },
  [sizes.MEDIUM]: { x: 15, y: 3 },
  [sizes.LARGE]: { x: 16, y: 6 },
};

export const fontSizes = {
  [sizes.SMALL]: 0,
  [sizes.MEDIUM]: 1,
  [sizes.LARGE]: 2,
};

export type sizeProps = `${sizes}`;

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  labels: [string, string];
  sizing?: sizeProps;
}
