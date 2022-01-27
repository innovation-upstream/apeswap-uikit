import React from "react";
import { Card as ThemeUICard } from "theme-ui";
import { CardProps, variants } from "./types";

const Card: React.FC<CardProps> = ({ children, background, variant = variants.PRIMARY, sx, ...props }) => {
  return (
    <ThemeUICard {...props} sx={{ ...sx, variant: `cards.${variant}`, background }}>
      {children}
    </ThemeUICard>
  );
};

export default Card;
