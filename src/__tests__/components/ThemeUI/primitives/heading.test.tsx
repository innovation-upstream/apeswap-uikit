import React from "react";
import { renderWithTheme } from "../../../../testHelpers";
import { Heading } from "../../../../components/ThemeUI/primitives/Heading";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Heading as="h1">Heading</Heading>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <h1
        class="css-1m4ptse-Heading css-1wf7gym"
      >
        Heading
      </h1>
    </DocumentFragment>
  `);
});
