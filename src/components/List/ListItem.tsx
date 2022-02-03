import React from "react";
import { Flex } from "theme-ui";
import { ListItemProps } from "./types";
import { Text } from "../Text";

const ListItem: React.FC<ListItemProps> = ({ align, text }) => {
  return (
    <Flex
      sx={{
        flex: 1,
        // eslint-disable-next-line no-nested-ternary
        justifyContent: align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center",
      }}
    >
      <Text as="p">{text}</Text>
    </Flex>
  );
};

export default ListItem;
