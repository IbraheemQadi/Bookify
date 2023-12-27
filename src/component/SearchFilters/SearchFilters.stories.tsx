import { Meta, Story } from "@storybook/react";
import SearchFilters from "./SearchFilters";

export default {
  title: "Section/SearchFilters",
  component: SearchFilters,
  tags: ["autodocs"],

} as Meta;

const Template: Story = (args) => <SearchFilters {...args} />;

export const Default = Template.bind({});
Default.args = {};
