/** @jsxImportSource theme-ui */
import React from "react";
import { IconSVGProps, icons } from "./types";
import { dynamicStyles } from "./styles";
import { Caret, External } from "./icons";
import { IconStyles } from "./icons/types";

const IconSVG: React.FC<IconSVGProps> = ({ icon, ...props }) => {
  const getStyles = ({ degree, color }: IconStyles) =>
    dynamicStyles.generic({
      degree,
      color,
    });

  if (icon === icons.CARET) {
    return <Caret {...props} getStyles={getStyles} />;
  }
  if (icon === icons.EXTERNAL) {
    return <External {...props} getStyles={getStyles} />;
  }
  return null;
};

export default IconSVG;
