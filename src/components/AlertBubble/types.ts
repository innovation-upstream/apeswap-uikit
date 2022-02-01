export const variants = {
  ERROR: "error",
} as const;

export type variantProps = typeof variants[keyof typeof variants];

export const sizes = {
  SMALL: "sm",
  MEDIUM: "md",
  LARGE: "lg",
} as const;

export const alertFontSizes = {
  [sizes.SMALL]: 1,
  [sizes.MEDIUM]: 2,
  [sizes.LARGE]: 4,
};

export type sizeProps = typeof sizes[keyof typeof sizes];

export interface AlertBubbleProps {
  variant?: variantProps;
  text?: string;
  extLinkText?: string;
  extLinkHref?: string;
  size?: sizeProps;
}
