import React from "react";

export const sizes = {
  SMALL: "small",
  MEDIUM: "normal",
  BIG: "large",
} as const;

export const fontSizes = {
  [sizes.SMALL]: 1,
  [sizes.MEDIUM]: 3,
  [sizes.BIG]: 6,
};

export const dropdownPadding = {
  [sizes.SMALL]: { x: 2, y: 1 },
  [sizes.MEDIUM]: { x: 5, y: 4 },
  [sizes.BIG]: { x: 10, y: 8 },
};

export const dropdownItemPadding = {
  [sizes.SMALL]: { x: 4, y: 1 },
  [sizes.MEDIUM]: { x: 9, y: 2 },
  [sizes.BIG]: { x: 14, y: 4 },
};

type sizeProps = typeof sizes[keyof typeof sizes];

export interface DropdownProps {
  component: React.FC;
  size?: sizeProps;
}

export interface DropdownItemProps {
  onClick?: () => void;
  url?: string;
  active?: boolean;
  size?: sizeProps;
}
