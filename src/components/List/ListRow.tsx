import React from "react";
import { Flex } from "theme-ui";
import styles from "./styles";

const ListRow: React.FC<any> = ({ children }) => {
  return <Flex sx={{ ...styles.row }}>{children}</Flex>;
};

export default ListRow;
