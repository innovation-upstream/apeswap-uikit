import { ThemeUIStyleObject } from "theme-ui";

const baseStyle = {
  p: 9,
  borderRadius: "normal",
  background: "navbar",
//   boxShadow: "0px 25px 55px 20px rgba(0, 0, 0, 0.1)",
};

const styles: Record<string, ThemeUIStyleObject> = {
  1: {
    position: "relative",
    ...baseStyle,
    "&::before": {
      content: '""',
      position: "absolute",
      display: "block",
      width: 0,
      left: "50%",
      bottom: 0,
      border: "15px solid transparent",
      borderBottom: 0,
      borderTop: "15px solid #5494db",
      transform: "translate(-50%, calc(100% + 5px))",
    },
  },
  2: {
    ...baseStyle,
  },
  3: {
    position: "relative",
    color: "brown",
    fontSize: 0,
    lineHeight: "18px",
    fontWeight: "normal",
    ...baseStyle,
    "&::before": {
      content: '""',
      position: "absolute",
      display: "block",
      width: 0,
      bottom: 2,
      left: "95%",
      border: "12px solid transparent",
      borderBottom: 0,
      borderTopColor: "navbar",
      borderTopWidth: "15px",
      borderTopStyle: "solid",
      transform: "translate(-50%, calc(100% + 5px))",
    },
  },
  4: {
    position: "relative",
    color: "brown",
    fontSize: 2,
    lineHeight: "24px",
    fontWeight: "normal",
    ...baseStyle,
    "&::before": {
      content: '""',
      position: "absolute",
      display: "block",
      width: 0,
      bottom: 2,
      left: "95%",
      border: "12px solid transparent",
      borderBottom: 0,
      borderTopColor: "navbar",
      borderTopWidth: "15px",
      borderTopStyle: "solid",
      transform: "translate(-50%, calc(100% + 5px))",
    },
  },
  linkWrapper: {
      justifyContent: "center",
      gap: 3,
      alignItems: "center",
      fontWeight: "bold",
      textDecoration: "underline",
      svg: {
          fill: "brown",
          path: "brown"
      }
  }
};

export default styles;