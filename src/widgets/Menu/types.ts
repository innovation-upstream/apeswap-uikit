import React from "react";
import { iconTypes } from "../../components/Icon/types";

export interface MenuItemProps {
  label: string;
  path?: string;
  icon?: iconTypes | React.ReactNode;
  hasSubmenu?: boolean;
  isSubmenu?: boolean;
}

export interface MenuContextProps {
  collapse: boolean;
  active: string;
  setCollapse: (collapse: boolean) => void;
  setActive: (active: string) => void;
}
