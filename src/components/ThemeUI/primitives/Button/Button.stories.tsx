import React from "react";
import Button from "./Button";
import StorybookLayout from "../../../StorybookLayout/StorybookLayout";

export default {
  title: "ThemeUI/Components/Primitives/Button",
  component: Button,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    variant: {
      control: { type: "select" },
    },
    size: {
      control: { type: "select" },
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
  size: "normal",
};
