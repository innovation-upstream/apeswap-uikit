import React from "react";
import { Flex, Text, Box, Button } from "theme-ui";
import Modal from "./Modal";
import StorybookLayout from "../../StorybookLayout/StorybookLayout";
import ModalHeader from "./ModalHeader";
import ThemeUIDivider from "../primitives/Divider/Divider";
import {Heading} from "../primitives/Heading";
import ModalBody from "./ModalBody";
import ModalBodySytled from "./ModalBodySytled";
import ModalBodyDefault from "./ModalBodyDefault";
import {ThemeUIButton} from "../primitives/Button";
import ModalFooter from "./ModalFooter";
import CancelButton from "./CancelButton";

export default {
  title: "ThemeUI/Components/Modal",
  component: Modal,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

export const modal = (args: any) => (
  <StorybookLayout {...args}>
    <Modal {...args}>
      <ModalHeader>
        <Heading as="h3">Stake BANANA</Heading>
      </ModalHeader>
      <ThemeUIDivider />
      <ModalBody>
        <ModalBodySytled>
          <ThemeUIButton>MAX</ThemeUIButton>
          <Box>
            <Heading as="h3">100.33</Heading>
            <Text>~$607.34455</Text>
          </Box>
        </ModalBodySytled>
        <ModalBodyDefault>
          <Heading as="h5">BANANA</Heading>
          <Text>Balance: 100.33</Text>
        </ModalBodyDefault>
      </ModalBody>
      <ModalFooter>
        <ThemeUIButton>DEPOSIT</ThemeUIButton>
      </ModalFooter>
    </Modal>
  </StorybookLayout>
);

modal.args = {
  colorMode: "light",
  open: true
};
