import React from "react";

export const sizes = {
  SMALL: "sm",
  MEDIUM: "md",
  LARGE: "lg",
} as const;

export const fontSizes = {
  [sizes.SMALL]: 1,
  [sizes.MEDIUM]: 3,
  [sizes.LARGE]: 6,
};

export const dropdownPadding = {
  [sizes.SMALL]: { x: 2, y: 1 },
  [sizes.MEDIUM]: { x: 5, y: 4 },
  [sizes.LARGE]: { x: 10, y: 8 },
};

export const dropdownItemPadding = {
  [sizes.SMALL]: { x: 4, y: 1 },
  [sizes.MEDIUM]: { x: 9, y: 2 },
  [sizes.LARGE]: { x: 14, y: 4 },
};

type sizeProps = typeof sizes[keyof typeof sizes];

export interface DropdownProps {
  component: React.ReactNode;
  size?: sizeProps;
}

export interface DropdownItemProps {
  onClick?: () => void;
  url?: string;
  active?: boolean;
  size?: sizeProps;
}
