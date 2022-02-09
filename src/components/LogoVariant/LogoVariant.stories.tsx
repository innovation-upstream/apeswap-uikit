import React from "react";
import LogoVariant from "./LogoVariant";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/LogoVariant",
  component: LogoVariant,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

export const logoVariant = (args: any) => {
  return (
    <StorybookLayout {...args}>
      <LogoVariant {...args} />
    </StorybookLayout>
  );
};

logoVariant.args = {
  colorMode: "light",
};
