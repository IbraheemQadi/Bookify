import { Meta } from "@storybook/react";
import SortBy from "./SortBy";

export default {
  title: "Components/SortBy",
  component: SortBy,
  tags: ["autodocs"],
} as Meta;

export const Default = {
  args: {
    options: ["Price", "Star Rating"],
    selectedSortBy: "Star Rating",
    onSortByChange: (sortBy: string) => console.log(sortBy),
  },
};
