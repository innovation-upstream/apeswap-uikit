import React from "react";
import { Flex } from "theme-ui";
import CancelButton from "./CancelButton";
import { ModalProps } from "./Modal.interface";
import styles from "./styles";

const ModalFooter: React.FC<ModalProps> = ({ children }) => {
  return (
    <Flex sx={styles.modalFooter}>
      {children}
      <CancelButton handleClose={() => null}>Cancel</CancelButton>
    </Flex>
  );
};

export default ModalFooter;