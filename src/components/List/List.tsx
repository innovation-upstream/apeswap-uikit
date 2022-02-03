import React from "react";
import { Flex } from "theme-ui";
import styles from "./styles";
import { ListProps } from "./types";

const List: React.FC<ListProps> = ({ children }) => {
  return <Flex sx={{ ...styles.list }}>{children}</Flex>;
};

export default List;
