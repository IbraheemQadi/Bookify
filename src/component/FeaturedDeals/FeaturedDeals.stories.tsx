import { Container } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import FeaturedDeals from "./FeaturedDeals";

const meta: Meta<typeof FeaturedDeals> = {
  title: "Section/FeaturedDeals",
  component: FeaturedDeals,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Container maxWidth="lg">
        <Story />
      </Container>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
