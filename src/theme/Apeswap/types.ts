const colorValues = {
  background: "background",
  backgroundDisabled: "backgroundDisabled",
  navbar: "navbar",
  body: "body",
  lvl1: "lvl1",
  lvl2: "lvl2",
  primaryBright: "primaryBright",
  primaryDark: "primaryDark",
  success: "success",
  error: "error",
  yellow: "yellow",
  brown: "brown",
  primaryButtonDisable: "primaryButtonDisable",
  secondaryButtonDisableBg: "secondaryButtonDisableBg",
  secondaryButtonDisableColor: "secondaryButtonDisableColor",
  dividerColor: "dividerColor",
  textareaColor: "textareaColor",
  black: "black",
  gradient: "gradient",
};

export type colorProps = keyof typeof colorValues;

export default colorValues;
