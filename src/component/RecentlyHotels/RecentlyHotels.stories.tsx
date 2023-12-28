import { Container } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import RecentlyHotels from "./RecentlyHotels";

const meta: Meta<typeof RecentlyHotels> = {
  title: "Section/RecentlyHotels",
  component: RecentlyHotels,
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
