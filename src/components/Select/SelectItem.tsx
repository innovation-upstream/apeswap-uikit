/** @jsxImportSource theme-ui */
import React from "react";
import { Box } from "theme-ui";
import { SelectItemProps, selectItemPadding, sizes } from "./types";
import { dynamicStyles } from "./styles";

const SelectItem: React.FC<SelectItemProps> = ({
  onClick,
  value,
  active,
  px = "12px",
  py = "8px",
  size = sizes.MEDIUM,
  children,
}) => {
  const style = dynamicStyles.dropdownItem({ size });

  return (
    <Box
      as="li"
      onClick={() => onClick?.(value)}
      sx={{
        padding: px !== "auto" && py !== "auto" ? `${py} ${px}` : selectItemPadding[size],
        listStyleType: "none",
        cursor: "pointer",
        borderRadius: "10px",
        "&:hover": {
          backgroundColor: !active ? "lvl2" : undefined,
        },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={style}>{children}</Box>
    </Box>
  );
};

export default SelectItem;
