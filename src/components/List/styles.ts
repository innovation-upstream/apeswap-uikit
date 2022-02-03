import { ThemeUIStyleObject } from "theme-ui";
// import { variantProps } from "./List.interface";

const styles: Record<string, ThemeUIStyleObject> = {
  list: {
    flexDirection: "column",
  },
  row: {
    overflow: "hidden",
    background: "white4",
    minHeight: "30px",
    "&:first-child": {
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    "&:last-child": {
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
    },
    "&:nth-child(2)": {
      background: "white3",
    },
    p: 5,
  },
  listItem: {
    borderRadius: "10px",
  },
};

export const dynamicStyles: Record<string, (props: any) => ThemeUIStyleObject> = {
  // listVariantStyles: (variant: variantProps) => ({
  //   justifyContent: variant === "centered" ? "center" : null,
  // }),
  // tabVariantStyles: (variant: variantProps) => ({
  //   flex: variant === "fullWidth" ? 1 : null,
  // }),
};

export default styles;
