import React from "react";
import { renderWithTheme } from "../../../../testHelpers";
import { ThemeUICard } from "../../../../components/ThemeUI/primitives/Card";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<ThemeUICard>Card</ThemeUICard>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-vurnku"
      >
        Card
      </div>
    </DocumentFragment>
  `);
});
