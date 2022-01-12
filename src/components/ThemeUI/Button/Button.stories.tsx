import React from "react";
import Button from "./Button";
import StorybookLayout from "../../StorybookLayout/StorybookLayout";

export default {
  title: "ThemeUI/Components/Button",
  component: Button,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
  },
};

export const button = (args: any) => (
  <StorybookLayout {...args}>
    <Button {...args} />
  </StorybookLayout>
);

button.args = {
  variant: "primary",
  title: "Button",
  colorMode: "light",
};
