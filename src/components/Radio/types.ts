import { RadioProps as ThemeUiRadioProps } from "theme-ui";

export type RadioTheme = {
  handleBackground: string;
};

export const scales = {
  SM: "sm",
  MD: "md",
} as const;

export type Scales = typeof scales[keyof typeof scales];

export interface RadioProps extends ThemeUiRadioProps {
  scale?: Scales;
}
