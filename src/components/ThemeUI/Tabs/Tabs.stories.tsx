import React from "react";
import Tab from "./Tab";
import TabPanel from "./TabPanel";
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
    size: {
      options: ["small", "normal", "large"],
      control: { type: "radio" },
    },
  },
};

export const Tabs = (args: any) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <StorybookLayout {...args}>
      <TabsUI>
        <Tab index={0} activeTab={activeTab} onClick={setActiveTab} label="Tab 1" {...args} />
        <Tab index={1} activeTab={activeTab} onClick={setActiveTab} label="Tab 2" {...args} />
      </TabsUI>

      <div>
        <TabPanel index={0} activeTab={activeTab}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illum veniam natus unde suscipit quae at
          voluptate dicta? Itaque, libero? Eaque, ipsa! Adipisci recusandae quasi, nulla quaerat optio officia suscipit!
        </TabPanel>
        <TabPanel index={1} activeTab={activeTab}>
          Hi
        </TabPanel>
        <TabPanel index={2} activeTab={activeTab}>
          Hey
        </TabPanel>
      </div>
    </StorybookLayout>
  );
};

Tabs.args = {
  colorMode: "light",
  size: "normal",
};
