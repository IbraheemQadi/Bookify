import { Meta, Story } from "@storybook/react";
import Search from "./Search";

export default {
  title: "Section/Search",
  component: Search,
} as Meta;

const Template: Story = (args) => <Search {...args} />;

export const Default = Template.bind({});
