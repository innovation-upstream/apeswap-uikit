import React from "react";
import { Card as ThemeUICard } from "theme-ui";
import { UICardProps, variants } from "./Card.interface";
import colors from "../../../../theme/Apeswap/types";

const Card: React.FC<UICardProps> = ({ children, background, variant = variants.PRIMARY, sx, ...props }) => {
  return (
    <ThemeUICard {...props} sx={{ ...sx, variant: `cards.${variant}`, background }}>
      {children}
    </ThemeUICard>
  );
};

export default Card;
