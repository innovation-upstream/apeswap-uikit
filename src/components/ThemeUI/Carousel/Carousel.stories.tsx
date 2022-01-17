import React from "react";
import Carousel from "./Carousel";
import StorybookLayout from "../../StorybookLayout/StorybookLayout";

export default {
  title: "ThemeUI/Components/Carousel",
  component: Carousel,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

export const carousel = (args: any) => (
  <StorybookLayout {...args}>
    <Carousel {...args} />
  </StorybookLayout>
);

carousel.args = {
  colorMode: "light",
  slides: [
    "https://via.placeholder.com/800x400",
    "https://via.placeholder.com/900x500",
    "https://via.placeholder.com/1000x600",
    "https://via.placeholder.com/900x500",
  ],
  controls: true,
  autoPlay: true,
  interval: 4000,
  hideIndicator: false,
  defaultSlide: 0,
};
