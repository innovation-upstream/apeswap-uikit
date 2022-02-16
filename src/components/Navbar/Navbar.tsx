/** @jsxImportSource theme-ui */
import React from "react";
import { Flex, Box } from "theme-ui";
import style from "./styles";
import { IconButton } from "../Button";
import { icons } from "../IconSVG/types";
import Select from "../Select/Select";
import SelectItem from "../Select/SelectItem";
import { IconSVG } from "../IconSVG";
import colorValues from "../../theme/Apeswap/types";
import { Text } from "../Text";
import { NavbarProps } from "./Navbar.interface";

const Navbar: React.FC<NavbarProps> = ({
  children,
  networks,
  activeNetwork,
  setActiveNetwork,
  colorMode,
  profileLink,
  globeLink,
  userId,
  ...props
}) => {
  return (
    <nav sx={style.container}>
      <Flex sx={style.leftContainer}>
        <IconButton variant="transparent" icon={icons.LOGO} sx={{ display: ["none", "none", "block"] }} />
        <IconButton as="div" variant="transparent" icon={icons.LOGO} sx={{ display: ["block", "block", "none"] }} />
        {children}
      </Flex>

      <Flex sx={style.rightContainer}>
        {networks === undefined || networks?.length === 0 ? (
          <></>
        ) : (
          <Select active={activeNetwork}>
            {networks?.map((item) => {
              return (
                <SelectItem value={item.chainId} px="10px" py="5px" onClick={setActiveNetwork} key={item.chainId}>
                  <Flex sx={{ gap: 4 }}>
                    <IconSVG icon={item?.icon} color={`${colorValues.brown}`} width={22} />
                    <Text color={`${colorValues.brown}`} sx={{ fontWeight: "normal", fontSize: "12px" }}>
                      {item.name}
                    </Text>
                  </Flex>
                </SelectItem>
              );
            })}
          </Select>
        )}

        <IconButton
          sx={{ "&:hover": { background: colorValues.lvl2 } }}
          icon={icons.GLOBE}
          px="6px"
          py="6px"
          variant="circular"
          color="brown"
          onClick={globeLink}
        />

        <Box sx={style.logoWrapper}>
          <Box sx={style.idContainer}>{userId}</Box>
          <IconButton
            onClick={profileLink}
            icon={icons.PROFILEICON}
            px="7px"
            py="4.5px"
            variant="circular"
            colorMode={colorMode}
          />
        </Box>
      </Flex>
    </nav>
  );
};

export default Navbar;
