import { Meta, StoryObj } from "@storybook/react";
import HotelCardSkeleton from "../Hotel/HotelCardSkeleton";
import SkeletonContainer from "./SkeletonContainer";

const meta: Meta<typeof SkeletonContainer> = {
  title: "Components/SkeletonContainer",
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
    Children: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    Children: () => <HotelCardSkeleton />,
    numberOfSkeletons: 4,
    direction: "row",
  },
};
