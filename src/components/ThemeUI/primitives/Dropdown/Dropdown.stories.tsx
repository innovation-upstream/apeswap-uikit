import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeUIText } from "../index";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import StorybookLayout from "../../../StorybookLayout/StorybookLayout";

export default {
  title: "ThemeUI/Components/Primitives/Dropdown",
  component: Dropdown,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    size: {
      control: { type: "select" },
    },
  },
};

export const dropdown = (args) => {
  const Title = () => <ThemeUIText sx={{ color: "brown" }}>Dropdown</ThemeUIText>;

  return (
    <StorybookLayout {...args}>
      <Router>
        <Dropdown {...args} component={<Title />}>
          <DropdownItem url="/" active {...args}>
            <ThemeUIText sx={{ color: "brown" }}>Item 1 Selected link</ThemeUIText>
          </DropdownItem>
          <DropdownItem {...args}>
            <ThemeUIText sx={{ color: "brown" }}>Item 2</ThemeUIText>
          </DropdownItem>
        </Dropdown>
      </Router>
    </StorybookLayout>
  );
};

dropdown.args = {
  colorMode: "light",
  size: "normal",
};
