import React from "react";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/Menu",
  component: Menu,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

const sideMenu = [
  {
    label: "Home",
    icon: "home",
    to: "/",
  },
  {
    label: "Ape Stats",
    icon: "calculator",
    to: "/",
  },
  {
    label: "Trade",
    icon: "trade",
    to: "/",
    children: [
      {
        label: "Buy",
        to: "/",
      },
      {
        label: "Sell",
        to: "/",
      },
    ],
  },
  {
    label: "Vaults",
    icon: "vault",
    to: "/",
  },
  {
    label: "Farms",
    icon: "farm",
    to: "/",
  },
  {
    label: "Pools",
    icon: "pool",
    to: "/",
  },
  {
    label: "IAO",
    icon: "rocket",
    to: "/",
  },
  {
    label: "NFA",
    icon: "nfa",
    children: [
      {
        label: "More",
        to: "/",
      },
    ],
  },
  {
    label: "GNANA",
    icon: "gnana",
    to: "/",
  },
  {
    label: "Info",
    icon: "info",
    to: "/",
  },
  {
    label: "More",
    icon: "more",
    children: [
      {
        label: "More",
        to: "/",
      },
    ],
  },
];

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <Menu {...args}>
      {sideMenu.map((item, index) => (
        <MenuItem item={item} key={`${item}-${index + 1}`} />
      ))}
    </Menu>
  </StorybookLayout>
);

Default.args = {
  colorMode: "light",
};
