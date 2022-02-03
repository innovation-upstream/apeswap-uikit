import React from "react";
import List from "./List";
import ListItem from "./ListItem";
import ListHead from "./ListHead";
import ListRow from "./ListRow";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/List",
  component: List,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

const rows = [
  { name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Ice cream sandwich", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Eclair", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Cupcake", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Gingerbread", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
];

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <List {...args}>
      <ListHead>
        <ListItem align="left" text="Dessert (100g serving)" />
        <ListItem text="Calories" />
        <ListItem text="Fat&nbsp;(g)" />
        <ListItem text="Carbs&nbsp;(g)" />
        <ListItem text="Protein&nbsp;(g)" />
        <ListItem text="Protein&nbsp;(g)" />
      </ListHead>

      {rows.map((row) => (
        <ListRow>
          <ListItem text={row.name} align="left" />
          <ListItem text={row.calories} />
          <ListItem text={row.fat} />
          <ListItem text={row.carbs} />
          <ListItem text={row.protein} />
          <ListItem text={row.protein} />
        </ListRow>
      ))}

      {/* <ListRow>
        <ListItem text="row.name" align="left" />
        <ListItem text="row.calories" />
        <ListItem text="row.fat" />
        <ListItem text="row.carbs" />
        <ListItem text="row.protein" />
      </ListRow>

      <ListRow>
        <ListItem text="row.name" align="left" />
        <ListItem text="row.calories" />
        <ListItem text="row.fat" />
        <ListItem text="row.carbs" />
        <ListItem text="row.protein" />
      </ListRow> */}
    </List>
  </StorybookLayout>
);

Default.args = {
  colorMode: "light",
  size: "md",
};
