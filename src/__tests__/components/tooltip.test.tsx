import React from "react";
import { renderWithTheme } from "../../testHelpers";
import TooltipBubble from "../../components/TooltipBubble/TooltipBubble";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<TooltipBubble body={<></>}>Tooltip</TooltipBubble>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
        <span class="css-1aic9ui-TooltipBubble css-vurnku">
            <div class="css-1t2ffmq-TooltipBubble css-vurnku">
                <div class="css-4ktmrq-TooltipBubble css-vurnku">
                    <span class="css-lo32p-Text css-vurnku">Just Text. Variant 4</span>
                </div>
            </div>
            <span class="css-vurnku">
                <button class="css-1m4z738-Button css-vhv7r1">Just Text. Variant 4</button>
            </span>
        </span>
    </DocumentFragment>
  `);
});
