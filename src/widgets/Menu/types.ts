import React from "react";
import { iconTypes } from "../../components/Icon/types";

export interface MenuItem {
  label: string;
  path?: string;
  icon?: iconTypes;
}

export interface MenuLinkProps {
  label: string;
  path?: string;
  icon?: iconTypes | React.ReactNode;
  component?: React.FC;
  componentProps?: Record<string, any>;
}

export interface MenuContextProps {
  collapse: boolean;
  active: string;
  setCollapse: (collapse: boolean) => void;
  setActive: (active: string) => void;
}
