import { Meta, StoryObj } from "@storybook/react";
import HotelCardSkeleton from "@/components/HotelCardSkeleton";
import SkeletonContainer from "./SkeletonContainer";

const meta: Meta<typeof SkeletonContainer> = {
  title: "Pages/Home Page/SkeletonContainer",
  component: SkeletonContainer,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "radio",
      options: ["row", "column"],
    },
    numberOfSkeletons: {
      control: "number",
    },
    children: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <HotelCardSkeleton variant="vertical" />,
    numberOfSkeletons: 4,
    direction: "row",
  },
};
