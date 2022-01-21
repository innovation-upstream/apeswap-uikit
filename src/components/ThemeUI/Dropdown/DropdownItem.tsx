/** @jsxImportSource theme-ui */
import React from "react";
import { Box, Text } from "theme-ui";
import { Link } from "react-router-dom";
import { DropdownItemProps } from "./Dropdown.interface";
import { dynamicStyles } from "./styles";

const Element: React.FC<DropdownItemProps> = ({ onClick, url, active, children }) => {
  const style = dynamicStyles.dropdownItem(active);
  return url ? (
    <Link to={url} sx={style}>
      {children}
    </Link>
  ) : (
    <Box onClick={onClick} sx={style}>
      {children}
    </Box>
  );
};

const DropdownItem: React.FC<DropdownItemProps> = ({ onClick, url, active, children }) => {
  return (
    <Box
      px={21}
      py="6px"
      as="li"
      sx={{
        listStyleType: active ? "disc" : "none",
        cursor: "pointer",
        color: "brown",
        borderRadius: "10px",
        "&:hover": {
          backgroundColor: "backgrounds.lvl2",
        },
      }}
    >
      <Element url={url} onClick={onClick} active={active}>
        {children}
      </Element>
    </Box>
  );
};

export default DropdownItem;
