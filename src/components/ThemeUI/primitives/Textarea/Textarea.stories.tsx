import React from "react";
import StorybookLayout from "../../../StorybookLayout/StorybookLayout";
import ThemeUITextarea from "./Textarea";

export default {
  title: "ThemeUI/Components/Textarea",
  component: ThemeUITextarea,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

export const textarea = (args: any) => (
  <StorybookLayout {...args}>
    <ThemeUITextarea {...args} />
  </StorybookLayout>
);

textarea.args = {
  colorMode: "light",
  rows: 4,
};
