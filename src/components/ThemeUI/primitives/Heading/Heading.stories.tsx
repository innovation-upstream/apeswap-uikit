import React from "react";
import StorybookLayout from "../../../StorybookLayout/StorybookLayout";
import Heading from "./Heading";

export default {
  title: "ThemeUI/Components/Primitives/Heading",
  component: Heading,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    as: {
      control: { type: "select" },
    },
  },
};

export const heading = (args: any) => (
  <StorybookLayout {...args}>
    <Heading {...args}>Heading</Heading>
  </StorybookLayout>
);

heading.args = {
  colorMode: "light",
  as: "h1",
  banner: false,
};
