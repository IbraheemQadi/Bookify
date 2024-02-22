import { Meta } from "@storybook/react";
import Table from "./Table";

export default {
  title: "Components/Table",
  component: Table,
} as Meta;

const tableData = [
  { id: 1, name: "John", age: 20 },
  { id: 2, name: "Jane", age: 21 },
  { id: 3, name: "Mary", age: 22 },
  { id: 4, name: "Peter", age: 23 },
  { id: 5, name: "James", age: 24 },
];

export const Default = {
  args: {
    headers: ["ID", "Name", "Age"],
    data: tableData,
  },
};
