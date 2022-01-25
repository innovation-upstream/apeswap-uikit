export const size = {
  SMALL: "small",
  MEDIUM: "normal",
  BIG: "large",
} as const;

export const buttonFontSizes = {
  [size.SMALL]: 8,
  [size.MEDIUM]: 16,
  [size.BIG]: 32,
};

type sizeProps = typeof size[keyof typeof size];

export interface SwitchProps {
  checked: boolean;
  onChange?: (state: boolean) => void;
  size?: sizeProps;
}
