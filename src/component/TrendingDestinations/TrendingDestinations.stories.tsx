import { Meta, Story } from "@storybook/react";
import TrendingDestinations from "./TrendingDestinations";

export default {
  title: "Section/TrendingDestinations",
  component: TrendingDestinations,
  tags: ["autodocs"],
} as Meta;

const Template: Story = (args) => <TrendingDestinations {...args} />;

export const Default = Template.bind({});
