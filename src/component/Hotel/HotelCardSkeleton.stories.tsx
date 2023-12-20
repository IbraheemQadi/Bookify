import { Meta, StoryObj } from "@storybook/react";
import HotelCardSkeleton from "./HotelCardSkeleton";

const meta = {
  title: "Components/HotelCardSkeleton",
  component: HotelCardSkeleton,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 260 }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof HotelCardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
