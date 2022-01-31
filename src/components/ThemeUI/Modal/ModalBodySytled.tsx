import React from "react";
import { Flex } from "theme-ui";
import style from "./styles";

const ModalBodySytled: React.FC = ({ children }) => {
  return <Flex sx={style.modalBodyStyled}>{children}</Flex>;
};

export default ModalBodySytled;
