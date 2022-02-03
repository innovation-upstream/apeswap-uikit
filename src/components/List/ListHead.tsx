import React from "react";
import { Flex } from "theme-ui";
import styles from "./styles";

const ListHead: React.FC<any> = ({ children }) => {
  return <Flex sx={{ ...styles.row, fontWeight: "bold" }}>{children}</Flex>;
};

export default ListHead;
