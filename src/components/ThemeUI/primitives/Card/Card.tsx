import React from "react";
import { Card } from "theme-ui";
import { UICardProps, variants } from "./Card.interface";

const ThemeUICard: React.FC<UICardProps> = ({ children, variant = variants.PRIMARY, sx, ...props }) => {
  return (
    <Card {...props} sx={{ ...sx, variant: `cards.${variant}` }}>
      {children}
    </Card>
  );
};

export default ThemeUICard;
