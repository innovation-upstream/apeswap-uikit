import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Progress from "../../components/Progress/Progress";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Progress />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-12ans34-Progress"
      >
        <div
          class="css-1te2w3q-Progress"
        />
      </div>
    </DocumentFragment>
  `);
});
