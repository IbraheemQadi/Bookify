import { Meta } from "@storybook/react";
import Amenity from "./Amenity";
import SignalWifi0BarIcon from "@mui/icons-material/SignalWifi0Bar";
import SignalWifiStatusbar4BarIcon from "@mui/icons-material/SignalWifiStatusbar4Bar";

export default {
  title: "Components/Amenity",
  component: Amenity,
  tags: ["autodocs"],
} as Meta;

const amenity = {
  name: "Free Wi-Fi",
  description:
    "Stay connected with complimentary high-speed Wi-Fi available in all rooms.",
  icon: <SignalWifi0BarIcon />,
  checkedIcon: <SignalWifiStatusbar4BarIcon />,
};

export const Default = {
  args: {
    amenity: amenity,
    checked: false,
    handleChange: () => {},
  },
};

export const Checked = {
  args: {
    amenity: amenity,
    checked: true,
    handleChange: () => {},
  },
};
