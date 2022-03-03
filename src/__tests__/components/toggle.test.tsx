import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Toggle from "../../components/Toggle/Toggle";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Toggle checked onChange={handleChange} labels={["Switch1", "Switch2"]} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-5f219a-Toggle"
      >
        <div
          class="css-1008gcf-Toggle"
        >
          <span
            class="css-vnj78y-Toggle"
          >
            Switch1
          </span>
        </div>
        <div
          class="css-1d9f84a-Toggle"
        >
          <span
            class="css-vnj78y-Toggle"
          >
            Switch2
          </span>
        </div>
        <button
          class="css-k1c6lv"
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
