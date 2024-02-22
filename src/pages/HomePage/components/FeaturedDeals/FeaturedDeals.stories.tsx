import { Meta, StoryObj } from "@storybook/react";
import FeaturedDeals from "./FeaturedDeals";

const meta: Meta<typeof FeaturedDeals> = {
  title: "Pages/Home Page/FeaturedDeals",
  component: FeaturedDeals,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
