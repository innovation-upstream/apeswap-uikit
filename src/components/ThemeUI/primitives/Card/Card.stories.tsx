import React from "react";
import StorybookLayout from "../../../StorybookLayout/StorybookLayout";
import ThemeUICard from "./Card";

export default {
  title: "ThemeUI/Components/Card",
  component: ThemeUICard,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
  },
};

export const card = (args: any) => (
  <StorybookLayout {...args}>
    <ThemeUICard {...args} />
  </StorybookLayout>
);

card.args = {
  colorMode: "light",
  padding: 4,
};
