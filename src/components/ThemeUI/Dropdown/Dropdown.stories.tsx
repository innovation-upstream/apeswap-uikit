import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Text } from "theme-ui";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import StorybookLayout from "../../StorybookLayout/StorybookLayout";

export default {
  title: "ThemeUI/Components/Primitives/Dropdown",
  component: Dropdown,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

export const dropdown = (args) => {
  const Title = () => <Text sx={{ color: "brown" }}>Dropdown</Text>;

  return (
    <StorybookLayout {...args}>
      <Router>
        <Dropdown {...args} component={<Title />}>
          <DropdownItem url="/" active>
            <Text sx={{ color: "brown" }}>Item 1 Selected link</Text>
          </DropdownItem>
          <DropdownItem>
            <Text sx={{ color: "brown" }}>Item 2</Text>
          </DropdownItem>
        </Dropdown>
      </Router>
    </StorybookLayout>
  );
};

dropdown.args = {
  colorMode: "light",
};
