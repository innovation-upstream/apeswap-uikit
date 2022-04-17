/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import NetworkButton from "./NetworkButton";
import StorybookLayout from "../../components/StorybookLayout/StorybookLayout";

export default {
  title: "Widgets/NetworkModal",
  component: NetworkButton,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    open: {
      control: false,
    },
  },
};

export const Default = (args: any) => {
  const [chainId, setChainId] = useState(56);

  const changeNetwork = (netId: number): void => {
    if (netId === 56) {
      setChainId(137);
    } else {
      setChainId(56);
    }
  };

  return (
    <StorybookLayout {...args}>
      <NetworkButton chainId={chainId} switchNetwork={() => changeNetwork(chainId)} />
    </StorybookLayout>
  );
};

Default.args = {
  colorMode: "light",
};
