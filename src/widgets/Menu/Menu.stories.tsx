/* eslint-disable @typescript-eslint/no-empty-function */
/** @jsxImportSource theme-ui */
import React from "react";
import { NavLink } from "theme-ui";
import StorybookLayout from "../../components/StorybookLayout/StorybookLayout";
import { Text } from "../../components/Text";
import { Menu, MenuBody, MenuItem, MenuFooter } from ".";
import MenuContext from "./MenuContext";
import { icons } from "../../components/Icon/types";
import { Icon } from "../../components/Icon";

export default {
  title: "Widgets/Menu",
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
    icon: icons.HOME,
    path: "/hello",
  },
  {
    label: "Ape Stats",
    icon: icons.CALCULATOR,
    path: "/",
  },
  {
    label: "Trade",
    icon: icons.TRADE,
    subMenu: [
      {
        label: "Buy",
        path: "/hi",
      },
      {
        label: "Sell",
        path: "/",
      },
    ],
  },
  {
    label: "Vaults",
    icon: icons.VAULT,
    path: "/",
  },
  {
    label: "Farms",
    icon: icons.FARM,
    path: "/",
  },
  {
    label: "Pools",
    icon: icons.POOL,
    path: "/",
  },
  {
    label: "IAO",
    icon: icons.ROCKET,
    path: "/",
  },
  {
    label: "NFA",
    icon: icons.NFA,
    subMenu: [
      {
        label: "More",
        path: "/",
      },
    ],
  },
  {
    label: "GNANA",
    icon: icons.GNANA,
    path: "/",
  },
  {
    label: "Info",
    icon: icons.INFO,
    path: "/",
  },
  {
    label: "More",
    icon: <Icon width={24} icon="more" />,
    subMenu: [
      {
        label: "More",
        path: "/",
      },
    ],
  },
];

export const Default = (args: any) => {
  return (
    <StorybookLayout {...args}>
      <MenuContext.Provider
        value={{
          ...args,
          setCollapse: () => {},
        }}
      >
        <Menu {...args}>
          <MenuBody>
            {sideMenu.map(({ subMenu, ...item }, index) => (
              <MenuItem hasSubmenu={!!subMenu} {...item} key={`${item}-${index + 1}`}>
                {!subMenu ? (
                  <NavLink href={item.path} />
                ) : (
                  subMenu?.map((link) => (
                    <MenuItem isSubmenu {...link}>
                      <NavLink href={link.path} />
                    </MenuItem>
                  ))
                )}
              </MenuItem>
            ))}
          </MenuBody>

          <MenuFooter>
            <div sx={{ display: "flex", justifyContent: "space-between", ml: "19px", mr: "26px", mb: "70px" }}>
              <div sx={{ display: "flex", alignItems: "center", columnGap: "8px" }}>
                <Icon icon="ellipse" />
                <Text sx={{ color: "text", fontSize: "14px" }} weight="bold">
                  $3.747
                </Text>
              </div>
              <Icon icon="ellipse" />
              <Icon icon="ellipse" />
            </div>
          </MenuFooter>
        </Menu>
      </MenuContext.Provider>
    </StorybookLayout>
  );
};

Default.args = {
  colorMode: "light",
  collapse: true,
};
