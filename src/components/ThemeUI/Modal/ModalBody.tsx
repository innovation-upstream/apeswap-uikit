import React from "react";
import { Flex } from "theme-ui";
import style from "./styles";

const ModalBody:React.FC = ({children}) => {
    return <Flex sx={style.modalBody}>{children}</Flex>;
}

export default ModalBody;