import React from "react";
import { Text } from "../Text";
import TextIconButton from "./TextIconButton";
import StorybookLayout from "../StorybookLayout/StorybookLayout";
import { IconSVG } from "../IconSVG";
import { icons } from "../IconSVG/types";
import colorValues from "../../theme/Apeswap/types";

export default {
  title: "Components/TextIconButton",
  component: TextIconButton,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    variant: {
      control: { type: "select" },
    },
    icon: {
      control: { type: "select" },
    },
  },
};

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <TextIconButton {...args}>
      <IconSVG icon={icons.SEND} color={`${colorValues.brown}`} width="15px" />
      <Text color={`${colorValues.brown}`}>POLYGON</Text>
      <IconSVG icon={icons.CARET} />
    </TextIconButton>
  </StorybookLayout>
);

Default.args = {
  colorMode: "light",
  variant: "primary",
  color: "white",
  icon: "twitter",
};
