import React, { useState } from "react";
import { NavLink } from "theme-ui";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import StorybookLayout from "../StorybookLayout/StorybookLayout";
import { icons } from "../IconSVG/types";
import NavMenu from "./NavMenu";
import NavMenuItem from "./NavMenuItem";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

const NavItems = () => {
  return (
    <>
      <NavMenu>
        <NavMenuItem>
          <NavLink href="/">Exchange</NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink href="/">Stake</NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink href="/">Offerings</NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink href="/">Lending</NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink href="/">NFTs</NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink href="/">More</NavLink>
        </NavMenuItem>
      </NavMenu>
    </>
  );
};

const networks = [
  {
    name: "Polygon",
    icon: icons.POLYGON,
    chainId: 3232,
  },
  {
    name: "BSC",
    icon: icons.BSC,
    chainId: 4343,
  },
];

export const Default = (args: any) => {
  const history = useHistory();
  const handleProfileLink = () => history?.push("/");
  const handleGlobeLink = () => history?.push("/");
  const [active, setActive] = useState(4343);

  return (
    <StorybookLayout {...args}>
      <Navbar
        networks={networks}
        activeNetwork={active}
        setActiveNetwork={setActive}
        profileLink={handleProfileLink}
        globeLink={handleGlobeLink}
        userId="0xB1B5d...459721e"
        {...args}
      >
        <NavItems />
      </Navbar>
    </StorybookLayout>
  );
};

Default.args = {
  colorMode: "light",
};
