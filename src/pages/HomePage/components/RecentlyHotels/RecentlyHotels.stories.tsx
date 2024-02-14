import { Meta, StoryObj } from "@storybook/react";
import RecentlyHotels from "./RecentlyHotels";

const meta: Meta<typeof RecentlyHotels> = {
  title: "Section/RecentlyHotels",
  component: RecentlyHotels,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
