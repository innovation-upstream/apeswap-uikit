import React from "react";

export interface DropdownProps {
  component: React.FC;
}

export interface DropdownItemProps {
  onClick?: () => void;
  url?: string;
  active?: boolean;
}
