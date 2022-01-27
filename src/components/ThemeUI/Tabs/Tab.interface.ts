export const sizes = {
  SMALL: "small",
  MEDIUM: "normal",
  BIG: "large",
} as const;

export const tabFontSizes = {
  [sizes.SMALL]: 8,
  [sizes.MEDIUM]: 16,
  [sizes.BIG]: 32,
};

export const tabPadding = {
  [sizes.SMALL]: "5px 16px",
  [sizes.MEDIUM]: "10px 32.5px",
  [sizes.BIG]: "20px 65px",
};

export const variants = {
  CENTERED: "centered",
  FULLWIDTH: "fullWidth",
} as const;

type variantProps = typeof variants[keyof typeof variants];
type sizeProps = typeof sizes[keyof typeof sizes];

export interface TabProps {
  index: number;
  activeTab?: number;
  label: string;
  onClick: (activeTab: number) => void;
  size: sizeProps;
  variant: variantProps;
}
