import { ThemeUIStyleObject } from "theme-ui";

const styles: Record<string, ThemeUIStyleObject> = {
  default: {
    padding: "10px",
    border: "none",
  },
  transparent: {
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    padding: "0px",
    border: "none",
    cursor: "pointer",
    svg: {
      background: "transparent",
    },
  },
  flex: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    borderRadius: "normal",
    cursor: "pointer",
    padding: "10px 20px 10px 19px",
    span: {
      fontWeight: "bold",
    },
  },
};

export default styles;
