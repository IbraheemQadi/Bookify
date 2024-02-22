import { Meta, Story } from "@storybook/react";
import Hero from "./Hero";

export default {
  title: "Pages/User Layout/Hero",
  component: Hero,
} as Meta;

const Template: Story = () => <Hero />;

export const Default = Template.bind({});
Default.args = {};
