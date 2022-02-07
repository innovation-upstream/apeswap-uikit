/** @jsxImportSource theme-ui */
import React from "react";
import { IconSVGProps, icons } from "./types";
import { dynamicStyles } from "./styles";
import { Caret, External } from "./icons";
import { IconStyles } from "./icons/types";
import Home from "./icons/Home";
import Calculator from "./icons/Calculator";
import Farm from "./icons/Farm";
import Frame from "./icons/Frame";
import Gnana from "./icons/Gnana";
import Info from "./icons/Info";
import More from "./icons/More";
import NFA from "./icons/NFA";
import Pool from "./icons/Pool";
import Rocket from "./icons/Rocket";
import Trade from "./icons/Trade";
import Vault from "./icons/Vaults";

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
  if (icon === icons.HOME) {
    return <Home {...props} getStyles={getStyles} />;
  }
  if (icon === icons.CALCULATOR) {
    return <Calculator {...props} getStyles={getStyles} />;
  }
  if (icon === icons.FARM) {
    return <Farm {...props} getStyles={getStyles} />;
  }
  if (icon === icons.FRAME) {
    return <Frame {...props} getStyles={getStyles} />;
  }
  if (icon === icons.GNANA) {
    return <Gnana {...props} getStyles={getStyles} />;
  }
  if (icon === icons.INFO) {
    return <Info {...props} getStyles={getStyles} />;
  }
  if (icon === icons.MORE) {
    return <More {...props} getStyles={getStyles} />;
  }
  if (icon === icons.NFA) {
    return <NFA {...props} getStyles={getStyles} />;
  }
  if (icon === icons.POOL) {
    return <Pool {...props} getStyles={getStyles} />;
  }
  if (icon === icons.ROCKET) {
    return <Rocket {...props} getStyles={getStyles} />;
  }
  if (icon === icons.TRADE) {
    return <Trade {...props} getStyles={getStyles} />;
  }
  if (icon === icons.VAULT) {
    return <Vault {...props} getStyles={getStyles} />;
  }
  return null;
};

export default IconSVG;
