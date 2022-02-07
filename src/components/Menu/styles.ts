import { ThemeUIStyleObject } from "theme-ui";

const styles: Record<string, ThemeUIStyleObject> = {
  menu: {
    background: "lvl1",
    flexDirection: "column",
    width: "250px",
    height: "100vh",
    paddingRight: "10px",
    overflowX: "hidden",
    overflowY: "scroll",
    padding: "20px 5px",
    position: "fixed",
    zIndex: 1,
    top: 0,
    left: 0,
  },
  menuItem: {
    minHeight: "48px",
    flexDirection: "column",
  },
};

export default styles;
