import { ThemeUIStyleObject } from "theme-ui";
import { variantProps } from "./Tabs.interface";

const styles: Record<string, ThemeUIStyleObject> = {
  tabs: {
    overflow: "hidden",
    display: "flex",
    borderRadius: "10px",
    background: "transparent",
  },
  tab: {
    borderRadius: "10px",
  },
  tabUnderlay: {
    display: "flex",
    background: "lvl1",
    borderRadius: 0,
    padding: 0,
    margin: 0,
    "&:first-child": {
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px",
    },
    "&:last-child": {
      borderTopRightRadius: "10px",
      borderBottomRightRadius: "10px",
    },
  },
  tabPanel: {
    padding: "1em 0.5em",
  },
};

export const dynamicStyles: Record<string, (props: any) => ThemeUIStyleObject> = {
  tabsVariantStyles: (variant: variantProps) => ({
    justifyContent: variant === "centered" ? "center" : null,
  }),
  tabVariantStyles: (variant: variantProps) => ({
    flex: variant === "fullWidth" ? 1 : null,
  }),
};

export default styles;
