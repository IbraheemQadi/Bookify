import { Meta, StoryObj } from "@storybook/react";
import Hotel from "./HotelCard";

const meta = {
  title: "Components/Hotel",
  component: Hotel,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 260 }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Hotel>;

export default meta;
type Story = StoryObj<typeof meta>;

const hotel = {
  cityName: "Paris",
  hotelName: "Hotel de Ville",
  originalRoomPrice: 100,
  thumbnailUrl:
    "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  starRating: 4,
  finalPrice: 50,
};

export const Default: Story = {
  args: { hotel },
};
