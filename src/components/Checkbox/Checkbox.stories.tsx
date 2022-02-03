import React from "react";
import { Box } from "theme-ui";
import StorybookLayout from "../StorybookLayout/StorybookLayout";
import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <Checkbox scale="md" />
    <Box m="15px" />
    <Checkbox scale="sm" />
  </StorybookLayout>
);

Default.args = {
  colorMode: "light",
};