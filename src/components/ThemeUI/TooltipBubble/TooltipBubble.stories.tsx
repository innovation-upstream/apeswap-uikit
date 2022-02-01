import React from "react";
import { Text, Box } from "theme-ui";
import TooltipBubble from "./TooltipBubble";
import StorybookLayout from "../../StorybookLayout/StorybookLayout";
import TooltipLink from "./TooltipLink";
import TooltipFlex from "./TooltipFlex";

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
      <Text>Just Text. Variant 4</Text>
    </TooltipBubble>

    <Box m={4}>{}</Box>

    <TooltipBubble {...args} variant={3}>
      <Text>Just Text. Variant 3</Text>
      <Box mt="10px">
        <TooltipLink url="">Urlhere</TooltipLink>
        <TooltipLink url="">Urlhere</TooltipLink>
      </Box>
    </TooltipBubble>

    <Box m={4}>{}</Box>

    <TooltipBubble {...args} variant={2}>
      <TooltipFlex>
        <Text>Multiplier Var 2:</Text>
        <Text>X35</Text>
      </TooltipFlex>
      <TooltipFlex>
        <Text>Stake:</Text>
        <Text>BANANA-BNB LP</Text>
      </TooltipFlex>
      <Box mt="10px">
        <TooltipLink url="">Urlhere</TooltipLink>
        <TooltipLink url="">Urlhere</TooltipLink>
      </Box>
    </TooltipBubble>

    <Box m={4}>{}</Box>

    <TooltipBubble {...args} variant={1}>
      <TooltipFlex>
        <Text>Multiplier Var 1:</Text>
        <Text>X35</Text>
      </TooltipFlex>
      <TooltipFlex>
        <Text>Stake:</Text>
        <Text>BANANA-BNB LP</Text>
      </TooltipFlex>
    </TooltipBubble>
  </StorybookLayout>
);

Default.args = {
  colorMode: "light",
};
