import { Story, Meta } from "@storybook/react";
import HotelInformation from "./HotelInformation";

export default {
  title: "Section/HotelInformation",
  component: HotelInformation,
} as Meta;

const Template: Story = (args) => <HotelInformation {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Pass any necessary props here
};
