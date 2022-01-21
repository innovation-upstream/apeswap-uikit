import React from "react";
import StorybookLayout from "../../../StorybookLayout/StorybookLayout";
import ThemeUIDivider from "./Divider";

export default {
  title: "ThemeUI/Components/Divider",
  component: ThemeUIDivider,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

export const divider = (args: any) => (
  <StorybookLayout {...args}>
    <ThemeUIDivider {...args} />
  </StorybookLayout>
);

divider.args = {
  colorMode: "light",
};
