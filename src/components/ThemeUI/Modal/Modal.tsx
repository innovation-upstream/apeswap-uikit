import React from "react";
import { Box } from "theme-ui";
import { ModalProps } from "./Modal.interface";
import styles from "./styles";

const Modal: React.FC<ModalProps> = ({ children, open }) => {
  return <Box sx={open ? styles.container : {display: "none"}}>{children}</Box>;
};

export default Modal;