import React from "react";
import { withThemesProvider } from "themeprovider-storybook";
import light from "../src/theme/light";
import dark from "../src/theme/dark";
import ResetCSS from "../src/ResetCSS";
import { ModalProvider } from "../src/widgets/Modal";
import { addParameters, addDecorator } from '@storybook/react';
import { withThemeProvider } from 'storybook-addon-theme-ui';
import themeUI from '../src/theme/themeui/';
import darkTheme from '../src/theme/dark';

const globalDecorator = (StoryFn) => (
  <ModalProvider>
    <ResetCSS />
    <StoryFn />
  </ModalProvider>
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const themes = [
  {
    name: "Light",
    backgroundColor: light.colors.background,
    ...light,
  },
  {
    name: "Dark",
    backgroundColor: dark.colors.background,
    ...dark,
  },
];

addParameters({
  themeUi: {
    themes:
    [
      { theme: themeUI, name: 'Light' },
      {theme: darkTheme, name: 'Dark'}
    ]
  },
})

addDecorator(withThemeProvider)
export const decorators = [globalDecorator, withThemesProvider(themes)];
