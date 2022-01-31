import React from "react";
import { Button } from "theme-ui";
import { ModalProps } from "./Modal.interface";
import style from "./styles";

const CancelButton: React.FC<ModalProps> = ({ children, handleClose }) => {
  return (
    <Button sx={style.cancelButton} onClick={handleClose}>
      {children}
    </Button>
  );
};

export default CancelButton;
