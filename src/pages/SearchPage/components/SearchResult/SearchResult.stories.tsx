import { Meta } from "@storybook/react";
import hotels from "../../data/hotels";
import SearchResult from "./SearchResult";

export default {
  title: "Pages/Search Page/SearchResult",
  component: SearchResult,
  tags: ["autodocs"],
} as Meta;

export const Default = {
  args: { hotels },
};
