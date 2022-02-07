import React from "react";
import { renderWithTheme } from "../../testHelpers";
import TooltipBubble from "../../components/TooltipBubble/TooltipBubble";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<TooltipBubble body={<></>}>Tooltip</TooltipBubble>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-1s6czo2"
      >
        <div
          class="css-140ll04"
        >
          <div
            class="css-1d82qvs"
          />
        </div>
        <div
          class="css-r8xm40"
        >
          Tooltip
        </div>
      </div>
    </DocumentFragment>
  `);
});
