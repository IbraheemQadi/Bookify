import { Meta, Story } from "@storybook/react";
import Search from "./Search";

export default {
  title: "Pages/Home Page/Search",
  component: Search,
} as Meta;

const Template: Story = (args) => <Search {...args} />;

export const Default = Template.bind({});
