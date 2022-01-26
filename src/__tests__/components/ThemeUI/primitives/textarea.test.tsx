import React from "react";
import { renderWithTheme } from "../../../../testHelpers";
import { ThemeUITextarea } from "../../../../components/ThemeUI/primitives/Textarea";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<ThemeUITextarea />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <textarea
        class="css-iyqgnx"
      />
    </DocumentFragment>
  `);
});
