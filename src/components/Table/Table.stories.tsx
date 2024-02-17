import { Meta } from "@storybook/react";
import Table from "./Table";

export default {
  title: "Common/Table",
  component: Table,
} as Meta;

const tableData = [
  { id: 1, name: "John", age: 20 },
  { id: 2, name: "Jane", age: 21 },
  { id: 3, name: "Mary", age: 22 },
  { id: 4, name: "Peter", age: 23 },
  { id: 5, name: "James", age: 24 },
  { id: 6, name: "Paul", age: 25 },
  { id: 7, name: "Mark", age: 26 },
  { id: 8, name: "Luke", age: 27 },
  { id: 9, name: "Matthew", age: 28 },
  { id: 10, name: "Thomas", age: 29 },
  { id: 11, name: "John", age: 20 },
  { id: 12, name: "Jane", age: 21 },
  { id: 13, name: "Mary", age: 22 },
  { id: 14, name: "Peter", age: 23 },
  { id: 15, name: "James", age: 24 },
  { id: 16, name: "Paul", age: 25 },
  { id: 17, name: "Mark", age: 26 },
  { id: 18, name: "Luke", age: 27 },
  { id: 19, name: "Matthew", age: 28 },
  { id: 20, name: "Thomas", age: 29 },
  { id: 21, name: "John", age: 20 },
];

export const Default = {
  args: {
    headers: ["ID", "Name", "Age"],
    data: tableData,
  },
};
