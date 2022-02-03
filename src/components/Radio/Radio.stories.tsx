import React, { useState } from "react";
import { Box } from "theme-ui";
import StorybookLayout from "../StorybookLayout/StorybookLayout";
import Radio from "./Radio";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

export const Default = (args: any) => {
  const [val, setVal] = useState("");

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <StorybookLayout {...args}>
      <Radio scale="sm" name="test" value="1" onChange={handleChange} />
      <Box m="10px" />
      <Radio scale="md" name="test" value="2" onChange={handleChange} />
    </StorybookLayout>
  );
};

Default.args = {
  colorMode: "light",
};
