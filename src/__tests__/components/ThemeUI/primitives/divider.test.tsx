import React from "react";
import { renderWithTheme } from "../../../../testHelpers";
import ThemeUIDivider from "../../../../components/ThemeUI/primitives/Divider/Divider";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<ThemeUIDivider />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <hr
        class="css-1bb4y59"
      />
    </DocumentFragment>
  `);
});
