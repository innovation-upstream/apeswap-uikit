import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Toggle from "../../components/Toggle/Toggle";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Toggle checked onChange={handleChange} labels={["Switch1", "Switch2"]} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-4vqztx-Toggle"
      >
        <div
          class="css-l2o5q3-Toggle"
        >
          <span
            class="css-1w070cj"
          >
            Switch1
          </span>
        </div>
        <div
          class="css-l2o5q3-Toggle"
        >
          <span
            class="css-1w070cj"
          >
            Switch2
          </span>
        </div>
        <button
          class="css-5oplf8"
        >
          Switch2
        </button>
        <input
          aria-hidden="true"
          checked=""
          class="css-1hokic7-Toggle"
          tabindex="-1"
          type="checkbox"
        />
      </div>
    </DocumentFragment>
  `);
});
