import { Meta, StoryObj } from "@storybook/react";
import Hotel from "./HotelCard";

const meta = {
  title: "Components/Hotel",
  component: Hotel,
  tags: ["autodocs"],
} as Meta<typeof Hotel>;

export default meta;
type Story = StoryObj<typeof meta>;

const hotel = {
  hotelName: "The Majestic and Wonderful Bahamas",
  cityName: "Varadero",
  starRating: 4,
  description:
    "The best kept secret in the world is the country's sheer size and diversity. ",
  finalPrice: 100,
  thumbnailUrl: "https://source.unsplash.com/random",
  originalRoomPrice: 200,
};

export const Horizontal: Story = {
  args: { hotel, variant: "horizontal" },
};

export const Vertical: Story = {
  args: { hotel, variant: "vertical" },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 260 }}>
        <Story />
      </div>
    ),
  ],
};
