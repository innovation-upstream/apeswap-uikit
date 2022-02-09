import { ThemeUIStyleObject } from "theme-ui";

const styles: Record<string, ThemeUIStyleObject> = {
  nav: {
    background: "navbar",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "13px 20px",
  },
  leftContainer: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    "button:first-of-type": {
      padding: "6px 10px",
      borderRadius: "normal",
      "&:hover": {
        background: "lvl1",
      },
    },
  },
  rightContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    gap: 8,
  }
};

export default styles;