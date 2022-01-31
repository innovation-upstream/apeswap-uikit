import React from "react";
import { Box } from "theme-ui";
import { ModalProps } from "./Modal.interface";
import style from "./styles";

const Modal: React.FC<ModalProps> = ({ children, handleClose, open=false, minWidth = "80%", ...props }) => {
    
    return (
      <Box>
        <Box {...props} sx={open ? { minWidth, ...style.container } : { display: "none" }}>
          {children}
        </Box>
        <Box sx={open ? style.backdrop : { display: "none" }} onClick={handleClose} />
      </Box>
    );
};

export default Modal;
