import { ThemeUIStyleObject } from "theme-ui";
import { keyframes } from "@emotion/react";

const styles: Record<string, ThemeUIStyleObject> = {};

export const dynamicStyles: Record<string, (props: any) => ThemeUIStyleObject> = {
  dropdownItem: (active: boolean) => ({
    display: "inline-block",
    marginLeft: active ? "-10px" : undefined,
  }),
};

export default styles;
