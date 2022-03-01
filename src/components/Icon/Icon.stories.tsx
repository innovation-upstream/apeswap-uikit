/** @jsxImportSource theme-ui */
import React from "react";
import Icon from "./Icon";
import { icons } from "./types";
import { Text } from "../Text";
import { TableBody, TableRow, TableCell } from "../Table";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    icon: {
      control: { type: "select" },
    },
    direction: {
      control: { type: "select" },
    },
  },
};

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <Icon {...args} />
  </StorybookLayout>
);

Default.args = {
  icon: "eth_token",
  color: "text",
  width: 40,
};

export const AllIcons: React.FC = ({ ...args }: any) => {
  return (
    <StorybookLayout {...args}>
      <TableBody borderRadius={10}>
        {Object.values(icons).sort().map((icon) => {
          return (
            <TableRow key={icon} textAlign="left">
              <TableCell>
                <Icon color="text" width={icon === "textLogo" ? undefined : "25px"} icon={icon} />
              </TableCell>
              <TableCell><Text>{icon}</Text></TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </StorybookLayout>
  );
};
