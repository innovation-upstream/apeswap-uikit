import React from "react";
import { Flex } from "theme-ui";
import styles from "./styles";
import { Text } from "../Text";
import { AlertBubbleProps, alertFontSizes, sizes, variants } from "./types";
import { LinkExternal } from "../Link";
import { IconSVG } from "../IconSVG";

const AlertBubble: React.FC<AlertBubbleProps> = ({
  variant = variants.ERROR,
  text,
  extLinkText,
  extLinkHref,
  size = sizes.MEDIUM,
}) => {
  const [close, setClose] = React.useState(false);
  const handleClose = () => {
    setClose(true);
  };

  return (
    <Flex
      sx={{
        ...styles.alert,
        display: close ? "none" : null,
      }}
    >
      <Flex>
        <IconSVG icon="error" color={variant} />
      </Flex>

      <Flex sx={{ ...styles.content, fontSize: alertFontSizes[size] }}>
        <Text as="p" sx={{ fontSize: alertFontSizes[size] }}>
          {text}
        </Text>

        {extLinkText && (
          <LinkExternal href={extLinkHref} sx={{ ...styles.link }} color="brown">
            {extLinkText}
          </LinkExternal>
        )}
      </Flex>

      <Flex sx={{ ...styles.close }} onClick={handleClose}>
        <IconSVG icon="open-new" />
      </Flex>
    </Flex>
  );
};

export default AlertBubble;
