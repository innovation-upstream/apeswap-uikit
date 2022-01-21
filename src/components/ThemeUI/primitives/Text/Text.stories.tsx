import React from "react";
import StorybookLayout from "../../../StorybookLayout/StorybookLayout";
import ThemeUIText from "./Text";

export default {
  title: "ThemeUI/Components/Text",
  component: ThemeUIText,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
    variant: {
      options: [
        "big",
        "bigLight",
        "bigBold",
        "normal",
        "normalLight",
        "normalBold",
        "small",
        "smallLight",
        "smallBold",
      ],
      control: { type: "select" },
    },
  },
};

export const text = (args: any) => (
  <StorybookLayout {...args}>
    <ThemeUIText {...args}>Lorem Ipsum Text</ThemeUIText>
  </StorybookLayout>
);

text.args = {
  colorMode: "light",
  variant: "normal",
};
