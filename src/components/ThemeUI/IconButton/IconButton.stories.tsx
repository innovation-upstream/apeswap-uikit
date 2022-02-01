import React from "react";
import { Box } from "theme-ui";
import IconButton from "./IconButton";
import StorybookLayout from "../../StorybookLayout/StorybookLayout";
import { IconSVG } from "../IconSVG";


export default {
  title: "ThemeUI/Components/IconButton",
  component: IconButton,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <IconButton {...args}>
      <IconSVG color="white" icon="twitter" />
    </IconButton>
    <Box m="10px" />
    <IconButton >
      <IconSVG color="white" icon="send" />
    </IconButton>
  </StorybookLayout>
);

Default.args = {
  colorMode: "light",
};
