import { ThemeUIStyleObject } from "theme-ui";
import { backgroundColors, buttonFontSizes, buttonPadding, sizeProps, variantProps } from "./types";

const styles: Record<string, ThemeUIStyleObject> = {};

type styleProps = {
  variant: variantProps;
  size: sizeProps;
};
export const dynamicStyles: Record<string, (props: any) => ThemeUIStyleObject> = {
  backgroundStyles: ({ variant, size }: styleProps) => ({
    "&:hover": {
      background: backgroundColors[`${variant}`],
      borderColor: backgroundColors[`${variant}`],
    },
    variant: `buttons.${variant}`,
    fontSize: buttonFontSizes[size],
    px: buttonPadding[size].x,
    py: buttonPadding[size].y,
    transition: "0.3s",
  }),
};

export default styles;
