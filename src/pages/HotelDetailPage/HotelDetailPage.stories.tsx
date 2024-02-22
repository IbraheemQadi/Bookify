import { Story, Meta } from "@storybook/react";
import HotelDetailPage from "./HotelDetailPage";

export default {
  title: "Pages/Hotel Detail Page",
  component: HotelDetailPage,
} as Meta;

const Template: Story = () => <HotelDetailPage />;

export const Default = Template.bind({});
Default.args = {};
