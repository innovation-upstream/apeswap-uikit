import React from "react";
import StorybookLayout from "../../../StorybookLayout/StorybookLayout";
import Card from "./Card";

export default {
  title: "ThemeUI/Components/Primitives/Card",
  component: Card,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    background: {
      control: { type: "select" },
    },
    variant: {
      control: { type: "select" },
    },
  },
};

export const card = (args: any) => (
  <StorybookLayout {...args}>
    <Card {...args} />
  </StorybookLayout>
);

card.args = {
  colorMode: "light",
  padding: 4,
  variant: "primary",
};
