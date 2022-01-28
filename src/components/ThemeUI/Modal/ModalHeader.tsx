import React from "react";
import { Flex } from "theme-ui";
import style from "./styles";
import Close from "../IconSVG/icons/Close";
import CancelButton from "./CancelButton";
import { ModalProps } from ".";

const ModalHeader: React.FC<ModalProps> = ({ children, handleClose }) => {
  return (
    <Flex sx={style.modalHead}>
      {children}
      <CancelButton handleClose={handleClose}>
        <Close />
      </CancelButton>
    </Flex>
  );
};

export default ModalHeader;