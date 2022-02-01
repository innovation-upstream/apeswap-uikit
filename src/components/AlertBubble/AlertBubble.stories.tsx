import React from "react";
import AlertBubble from "./AlertBubble";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/AlertBubble",
  component: AlertBubble,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    variant: {
      control: { type: "select" },
    },
    size: {
      control: { type: "select" },
    },
  },
};

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <AlertBubble {...args} />
  </StorybookLayout>
);

Default.args = {
  colorMode: "light",
  variant: "error",
  size: "md",
  text: "Swap 0.0001 BNB for 0.0501 BANANA",
  extLinkText: "View on Explorer",
  extLinkHref: "https://apeswap.finance",
};
