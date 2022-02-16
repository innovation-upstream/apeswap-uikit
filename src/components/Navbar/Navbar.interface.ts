import { BoxProps } from "theme-ui";
import { icons } from "../IconSVG/types";

export interface NavLinkProps {
  text: string;
  url: string;
}

export interface netWorkProps {
  name: string;
  icon?: icons;
  chainId: number;
}

export interface NavbarProps extends BoxProps {
  colorMode?: string;
  networks?: netWorkProps[];
  activeNetwork?: number;
  setActiveNetwork?: () => void;
  profileLink?: () => void;
  globeLink?: () => void;
  userId?: string | number;
}
