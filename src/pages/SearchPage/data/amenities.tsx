import SignalWifi0BarIcon from "@mui/icons-material/SignalWifi0Bar";
import SignalWifiStatusbar4BarIcon from "@mui/icons-material/SignalWifiStatusbar4Bar";
import HvacOutlinedIcon from "@mui/icons-material/HvacOutlined";
import HvacIcon from "@mui/icons-material/Hvac";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import KitchenIcon from "@mui/icons-material/Kitchen";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";
import BalconyRoundedIcon from "@mui/icons-material/BalconyRounded";
import BalconyTwoToneIcon from "@mui/icons-material/BalconyTwoTone";
export const amenities = [
  {
    name: "Free Wi-Fi",
    description:
      "Stay connected with complimentary high-speed Wi-Fi available in all rooms.",
    icon: <SignalWifi0BarIcon />,
    checkedIcon: <SignalWifiStatusbar4BarIcon />,
  },
  {
    name: "Air Conditioning",
    description:
      "Enjoy a comfortable stay with individually controlled air conditioning in every room.",
    icon: <HvacOutlinedIcon />,
    checkedIcon: <HvacIcon />,
  },
  {
    name: "Mini Bar",
    description:
      "Unwind with a selection of beverages and snacks from the in-room mini bar.",
    icon: <KitchenOutlinedIcon />,
    checkedIcon: <KitchenIcon />,
  },
  {
    name: "Flat-screen TV",
    description:
      "Relax and enjoy your favorite shows or movies on a modern flat-screen TV.",
    icon: <DesktopWindowsRoundedIcon />,
    checkedIcon: <DesktopWindowsIcon />,
  },
  {
    name: "Private Balcony",
    description:
      "Take in breathtaking views from your private balcony, available in select rooms.",
    icon: <BalconyRoundedIcon />,
    checkedIcon: <BalconyTwoToneIcon />,
  },
];
