import React from "react";
import { renderWithTheme } from "../../../../testHelpers";
import { ThemeUIButton } from "../../../../components/ThemeUI/primitives/Button";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<ThemeUIButton>Submit</ThemeUIButton>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <button
        class="css-1tg9lki"
      >
        Submit
      </button>
    </DocumentFragment>
  `);
});
