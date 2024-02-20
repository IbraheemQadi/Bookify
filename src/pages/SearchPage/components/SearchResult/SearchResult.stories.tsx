import { Meta } from "@storybook/react";
import hotels from "../../data/hotels";
import SearchResult from "./SearchResult";

export default {
  title: "Section/SearchResult",
  component: SearchResult,
  tags: ["autodocs"],
} as Meta;

export const Default = {
  args: { hotels },
};
