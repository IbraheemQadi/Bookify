import { Meta, Story } from "@storybook/react";
import AvailableRoomsGrid from "./AvailableRoomsGrid";

export default {
  title: "Section/AvailableRoomsGrid",
  component: AvailableRoomsGrid,
} as Meta;

const Template: Story = (args) => <AvailableRoomsGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add any necessary props here
};
