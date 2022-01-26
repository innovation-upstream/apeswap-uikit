import { ThemeUIStyleObject } from "theme-ui";

const styles: Record<string, ThemeUIStyleObject> = {
  tabs: {
    overflow: "auto",
    display: "inline-flex",
    "flex-direction": "row",
    borderRadius: "10px",
  },
  tab: {
    borderRadius: "10px",
  },
  tabPanel: {
    padding: "1em 0.5em",
  },
};

export default styles;
