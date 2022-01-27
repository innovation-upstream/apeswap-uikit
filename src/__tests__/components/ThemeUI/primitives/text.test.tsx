import React from "react";
import { renderWithTheme } from "../../../../testHelpers";
import { ThemeUIText } from "../../../../components/ThemeUI/primitives/Text";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<ThemeUIText>Text</ThemeUIText>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <span
        class="css-18xsidq"
      >
        Text
      </span>
    </DocumentFragment>
  `);
});
