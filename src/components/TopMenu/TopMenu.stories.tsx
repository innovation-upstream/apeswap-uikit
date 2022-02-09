import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Text } from "../Text";
import { Button, IconButton, TextIconButton } from "../Button";
import TopMenu from "./TopMenu";
import StorybookLayout from "../StorybookLayout/StorybookLayout";
import { IconSVG } from "../IconSVG";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import { icons } from "../IconSVG/types";
import colorValues from "../../theme/Apeswap/types";
import LogoVariant from "../LogoVariant/LogoVariant";
import Modal from "../../widgets/Modal/Modal";

export default {
  title: "Components/TopMenu",
  component: TopMenu,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

export const topMenu = (args: any) => {

  return (
    <StorybookLayout {...args}>
      <TopMenu {...args}>
        <LeftContainer>
          <IconButton variant="transparent" icon="collapse" color="brown" />
        </LeftContainer>
        <RightContainer>
          <TextIconButton>
            <IconSVG icon={icons.POLYGON} color={`${colorValues.brown}`} />
            <Text color={`${colorValues.brown}`}>Polygon</Text>
            <IconSVG icon={icons.CARET} />
          </TextIconButton>
          <Button>CONNECT</Button>
          <Router>
            <Link to="/">
              <LogoVariant {...args} />
            </Link>
          </Router>
        </RightContainer>
      </TopMenu>
    </StorybookLayout>
  );
};

topMenu.args = {
  colorMode: "light",
};