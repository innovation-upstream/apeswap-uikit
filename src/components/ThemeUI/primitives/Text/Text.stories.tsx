import React from "react";
import StorybookLayout from "../../../StorybookLayout/StorybookLayout";
import Text from "./Text";

export default {
  title: "ThemeUI/Components/Primitives/Text",
  component: Text,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

export const text = (args: any) => (
  <StorybookLayout {...args}>
    <Text {...args}>Lorem Ipsum Text</Text>
  </StorybookLayout>
);

text.args = {
  colorMode: "light",
  variant: "large",
  weight: "bold",
  color: "brown",
};
