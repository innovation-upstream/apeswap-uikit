import { ThemeUIStyleObject } from "theme-ui";

const styles: Record<string, ThemeUIStyleObject> = {
  container: {
    display: "flex",
    background: "navbar",
    padding: "8px 20px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContainer: {
    alignItems: "center",
    gap: "46px",
  },
  rightContainer: {
    marginLeft: "auto",
    gap: "10px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    svg: {
      zIndex: 1,
    },
  },
  idContainer: {
    padding: "6px 7px 6px 15px",
    background: "lvl1",
    borderRadius: "10px 0 0 10px",
    fontSize: 0,
    color: "brown",
    fontWeight: "normal",
    lineHeight: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    "&:after": {
      content: '"\u00a0"',
      width: "10px",
      fontWeight: "normal",
      lineHeight: "18px",
      padding: "6px 0",
      display: "inline",
      position: "absolute",
      background: "lvl1",
      right: -2,
      pointerEvents: "none",
    },
  },
};

export default styles;
