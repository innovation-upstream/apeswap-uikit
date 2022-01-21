import React from "react";
import Button from "./Button";
import StorybookLayout from "../../../StorybookLayout/StorybookLayout";

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
    <Button {...args}>Apeswap</Button>
  </StorybookLayout>
);

button.args = {
  colorMode: "light",
  variant: "primary",
  disabled: false,
};
