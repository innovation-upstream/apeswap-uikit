import React from "react";
import { Flex } from "theme-ui";
import style from "./styles";

const ModalBodyDefault: React.FC = ({ children }) => {
  return <Flex sx={style.modalBodyDefault}>{children}</Flex>;
};

export default ModalBodyDefault;
