import { Meta, Story } from "@storybook/react";
import RoomCard from "./RoomCard";

export default {
  title: "Components/RoomCard",
  component: RoomCard,
} as Meta;

const Template: Story = (args) => <RoomCard {...args} />;

const room = {
  roomNumber: 601,
  roomPhotoUrl:
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/33143786.jpg?k=4d0bca9d9795b80beb2cd9786946e043b23d1372eb633d5855d3aba6343d68d4&o=&hp=1",
  roomType: "Executive Suite",
  capacityOfAdults: 2,
  capacityOfChildren: 1,
  roomAmenities: [
    {
      name: "Business Center Access",
      description: "Exclusive access to the hotel's business center.",
    },
    {
      name: "Meeting Room",
      description: "Private meeting room for business needs.",
    },
    {
      name: "Complimentary Breakfast",
      description: "Daily complimentary breakfast included.",
    },
  ],
  price: 220,
  availability: true,
};

export const Default = Template.bind({});
Default.args = {
  room,
};
