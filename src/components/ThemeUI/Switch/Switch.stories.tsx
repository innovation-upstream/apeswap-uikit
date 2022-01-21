import React from "react";
import SwitchUI from "./Switch";
import StorybookLayout from "../../StorybookLayout/StorybookLayout";

export default {
  title: "ThemeUI/Components/Switch",
  component: SwitchUI,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
  },
};

export const Switch = (args: any) => (
  <StorybookLayout {...args}>
    <SwitchUI {...args} />
  </StorybookLayout>
);

Switch.args = {
  checked: false,
  colorMode: "light",
};
