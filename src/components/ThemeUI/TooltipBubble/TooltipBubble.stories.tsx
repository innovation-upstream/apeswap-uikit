import React from "react";
import { Text, Box } from "theme-ui";
import TooltipBubble from "./TooltipBubble";
import StorybookLayout from "../../StorybookLayout/StorybookLayout";
import TooltipLink from "./TooltipLink";

export default {
  title: "ThemeUI/Components/TooltipBubble",
  component: TooltipBubble,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <TooltipBubble {...args} variant={4}>
      <Text>Just Text</Text>
    </TooltipBubble>

    <Box m={4}>{}</Box>

    <TooltipBubble {...args} variant={3}>
      <Text>Just Text. 3rd Variant</Text>
      <Box mt="10px">
        <TooltipLink url="https://">Urlhere</TooltipLink>
        <TooltipLink url="https://">Urlhere</TooltipLink>
      </Box>
    </TooltipBubble>
  </StorybookLayout>
);

Default.args = {
  colorMode: "light",
};
