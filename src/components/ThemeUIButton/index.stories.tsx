import React from "react";
import ThemeUIButton from "./ThemeUIButton";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "ThemeUI/Components/ThemeUIButton",
  component: ThemeUIButton,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
  },
};

export const button = (args: any) => (
  <StorybookLayout {...args}>
    <ThemeUIButton {...args} />
  </StorybookLayout>
);

button.args = {
  variant: "primary",
  title: "Button",
  colorMode: "light",
};
