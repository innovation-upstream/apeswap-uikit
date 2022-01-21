import React from "react";
import StorybookLayout from "../../../StorybookLayout/StorybookLayout";
import Header from "./Header";

export default {
  title: "ThemeUI/Components/Header",
  component: Header,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

export const header = (args: any) => (
  <StorybookLayout {...args}>
    <Header {...args} />
  </StorybookLayout>
);

header.args = {
  colorMode: "light",
};
