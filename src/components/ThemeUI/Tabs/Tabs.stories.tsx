import React from "react";
import Tab from "./Tab";
import TabsUI from "./Tabs";
import StorybookLayout from "../../StorybookLayout/StorybookLayout";

export default {
  title: "ThemeUI/Components/Tabs",
  component: TabsUI,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
  },
};

export const Tabs = (args: any) => (
  <StorybookLayout {...args}>
    <TabsUI {...args}>
      <Tab index={0} label="Hello" />
      <Tab index={1} label="Hi" />
      <Tab index={2} label="Hey" />
    </TabsUI>
  </StorybookLayout>
);

Tabs.args = {
  activeTab: 0,
  colorMode: "light",
};
