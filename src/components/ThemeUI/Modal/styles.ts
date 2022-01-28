import { ThemeUIStyleObject } from "theme-ui";

const styles: Record<string, ThemeUIStyleObject> = {
  container: {
    padding: 9,
    background: "navbar",
    borderRadius: "normal",
    color: "brown",
    hr: {
      background: "#DCD9D9",
    },
  },
  modalHead: {
    justifyContent: "space-between",
    alignItems: "center",
    svg: {
      fill: "brown",
      marginLeft: "auto",
      cursor: "pointer",
    },
    button: {
      ml: "auto"  
    }
  },
  modalBody: {
    my: 9,
    flexDirection: "column",
  },
  modalBodyDefault: {
    justifyContent: "space-between",
    alignItems: "center",
    px: 4,
    span: {
      fontSize: 2,
      fontWeight: "normal",
    },
  },
  modalBodyStyled: {
    borderRadius: "normal",
    padding: 9,
    mb: 9,
    justifyContent: "space-between",
    alignItems: "center",
    button: {
      fontWeight: "normal",
    },
    span: { fontSize: 0 },
    background: "lvl1",
  },
  modalFooter: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    pt: 9,
    gap: 4,
  },
  cancelButton: {
    background: "transparent",
    textDecoration: "underline",
    color: "brown",
    cursor: "pointer",
    fontSize: 0,
    fontWeight: "normal",
    p: 0,
  }
};

export default styles;
