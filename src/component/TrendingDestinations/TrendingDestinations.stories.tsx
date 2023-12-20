import { Story, Meta } from "@storybook/react";
import TrendingDestinations from "./TrendingDestinations";
import { Container } from "@mui/material";

export default {
  title: "Section/TrendingDestinations",
  component: TrendingDestinations,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Container maxWidth="lg">
        <Story />
      </Container>
    ),
  ],
} as Meta;

const Template: Story = (args) => <TrendingDestinations {...args} />;

export const Default = Template.bind({});
