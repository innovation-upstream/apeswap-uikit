import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Switch from "../../components/Switch/Switch";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Switch checked={false} labels={["1", "2"]} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-1nkptyu-Switch"
      >
        <div
          class="css-o2yhdh-Switch"
        >
          <span
            class="css-1w070cj"
          >
            1
          </span>
        </div>
        <div
          class="css-o2yhdh-Switch"
        >
          <span
            class="css-1w070cj"
          >
            2
          </span>
        </div>
        <button
          class="css-18fdx7q"
        >
          1
        </button>
        <input
          aria-hidden="true"
          class="css-1k7e3dq-Switch"
          tabindex="-1"
          type="checkbox"
        />
      </div>
    </DocumentFragment>
  `);
});
