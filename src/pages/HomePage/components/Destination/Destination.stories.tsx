import { Meta, StoryObj } from "@storybook/react";
import Destination from "./index";
import { Destination as DestinationType } from "@/pages/HomePage/entities/Destination";

const meta = {
  title: "Pages/Home Page/Destination",
  component: Destination,
  tags: ["autodocs"],
} as Meta<typeof Destination>;

export default meta;
type Story = StoryObj<typeof meta>;

const destination: DestinationType = {
  cityName: "New York",
  thumbnailUrl:
    "https://worldstrides.com/wp-content/uploads/2015/07/iStock_000040849990_Large.jpg",
  countryName: "United States",
  description: "The big apple",
  cityId: 1,
};

// 340px
export const Small: Story = {
  args: {
    destination: destination,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "340px", maxHeight: "260px" }}>
        <Story />
      </div>
    ),
  ],
};

// 520px
export const Medium: Story = {
  args: {
    destination: destination,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "520px", maxHeight: "260px" }}>
        <Story />
      </div>
    ),
  ],
};
