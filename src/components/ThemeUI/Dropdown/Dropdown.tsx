import React, { useState } from "react";
import { Box, Flex } from "theme-ui";
import { DropdownProps } from "./Dropdown.interface";
import { IconSVG } from "../IconSVG";

const Dropdown: React.FC<DropdownProps> = ({ component, children }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <Box
      sx={{
        background: "background.lvl1",
        borderRadius: "10px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <Flex
        px={9}
        py={12}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {component}
        <IconSVG icon="caret" direction={open ? "up" : "down"} />
      </Flex>
      {open && <ul>{children}</ul>}
    </Box>
  );
};

export default Dropdown;
