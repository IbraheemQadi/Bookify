import { Meta } from "@storybook/react";
import Amenity from "./Amenity";

export default {
  title: "Components/Amenity",
  component: Amenity,
  tags: ["autodocs"],
} as Meta;

const amenity = {
  name: "Free Wi-Fi",
  description:
    "Stay connected with complimentary high-speed Wi-Fi available in all rooms.",
};

export const Default = {
  args: {
    amenity: amenity,
    checked: false,
    size: "medium",
    handleChange: () => {},
  },
};

export const Checked = {
  args: {
    ...Default.args,
    checked: true,
  },
};

export const Medium = {
  args: {
    ...Default.args,
    size: "medium",
  },
};

export const Small = {
  args: {
    ...Default.args,
    size: "small",
  },
};
