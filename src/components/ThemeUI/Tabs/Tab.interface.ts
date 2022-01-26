export const size = {
  SMALL: "small",
  MEDIUM: "normal",
  BIG: "large",
} as const;

export const tabFontSizes = {
  [size.SMALL]: 8,
  [size.MEDIUM]: 16,
  [size.BIG]: 32,
};

export const tabPadding = {
  [size.SMALL]: "5px 16px",
  [size.MEDIUM]: "10px 32.5px",
  [size.BIG]: "20px 65px",
};

type sizeProps = typeof size[keyof typeof size];

export interface TabProps {
  index: number;
  activeTab?: number;
  label: string;
  onClick: (activeTab: number) => void;
  size?: sizeProps;
}
