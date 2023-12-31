import { Story, Meta } from "@storybook/react";
import HotelGallery from "./HotelGallery";

export default {
  title: "Section/HotelGallery",
  component: HotelGallery,
} as Meta;

const Template: Story = (args) => <HotelGallery {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Pass any necessary props here
};
