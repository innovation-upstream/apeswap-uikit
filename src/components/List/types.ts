export const sizes = {
  SMALL: "small",
  MEDIUM: "normal",
  BIG: "large",
} as const;

export const listFontSizes = {
  [sizes.SMALL]: 8,
  [sizes.MEDIUM]: 16,
  [sizes.BIG]: 32,
};

export const listPadding = {
  [sizes.SMALL]: "5px 16px",
  [sizes.MEDIUM]: "10px 32.5px",
  [sizes.BIG]: "20px 65px",
};

type sizeProps = typeof sizes[keyof typeof sizes];

export interface ListProps {
  size: sizeProps;
}

type align = "left" | "right";

export interface ListItemProps {
  align?: align;
  text: string | number;
}

// export interface ListProps {
//   size: sizeProps;
// }
