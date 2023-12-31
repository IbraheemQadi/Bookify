import { Story, Meta } from "@storybook/react";
import HotelDetailPage from "./HotelDetailPage";

export default {
  title: "Pages/HotelDetailPage",
  component: HotelDetailPage,
} as Meta;

const Template: Story = () => <HotelDetailPage />;

export const Default = Template.bind({});
Default.args = {};
