import { Meta, Story } from "@storybook/react";
import AppBar from "./AppBar";

export default {
  title: "Pages/User Layout/AppBar",
  component: AppBar,
} as Meta;

const Template: Story = (args) => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
