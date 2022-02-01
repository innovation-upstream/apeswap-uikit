import { ThemeUIStyleObject } from "theme-ui";

const styles: Record<string, ThemeUIStyleObject> = {
  alert: {
    maxWidth: "300px",
    background: "navbar",
    borderRadius: "10px",
    p: 5,
    minHeight: "90px",
    columnGap: "11px",
  },
  content: {
    flexDirection: "column",
    flex: 1,
    color: "brown",
    rowGap: "10px",
    pl: "10px",
  },
  link: {
    textDecoration: "underline",
    fontWeight: "bold",
  },
  close: {
    "&:hover": {
      cursor: "pointer",
    },
  },
};

export default styles;
