import { CheckboxProps as ThemeUiCheckboxProps } from "theme-ui";

export const scales = {
  SM: "sm",
  MD: "md",
} as const;

export type Scales = typeof scales[keyof typeof scales];

export interface CheckboxProps extends ThemeUiCheckboxProps {
  scale?: Scales;
  handleChange?: () => void;
}
