import BalconyRoundedIcon from "@mui/icons-material/BalconyRounded";
import BalconyTwoToneIcon from "@mui/icons-material/BalconyTwoTone";
import BedIcon from "@mui/icons-material/Bed";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import BreakfastDiningOutlinedIcon from "@mui/icons-material/BreakfastDiningOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";
import HvacIcon from "@mui/icons-material/Hvac";
import HvacOutlinedIcon from "@mui/icons-material/HvacOutlined";
import KitchenIcon from "@mui/icons-material/Kitchen";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import LocalCafeOutlinedIcon from "@mui/icons-material/LocalCafeOutlined";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";
import SignalWifi0BarIcon from "@mui/icons-material/SignalWifi0Bar";
import SignalWifiStatusbar4BarIcon from "@mui/icons-material/SignalWifiStatusbar4Bar";
import WindowIcon from "@mui/icons-material/Window";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
// [Icon, CheckedIcon]

SignalWifiStatusbar4BarIcon;
export const getAmenityIcon = (amenity: string) => {
  switch (amenity.toLowerCase()) {
    case "free wi-fi":
      return [<SignalWifi0BarIcon />, <SignalWifiStatusbar4BarIcon />];
    case "air conditioning":
      return [<HvacOutlinedIcon />, <HvacIcon />];
    case "kitchen":
      return [<KitchenOutlinedIcon />, <KitchenIcon />];
    case "business center access":
      return [<BusinessOutlinedIcon />, <BusinessIcon />];
    case "mini bar":
      return [<LocalCafeOutlinedIcon />, <LocalCafeIcon />];
    case "private balcony":
      return [<BalconyRoundedIcon />, <BalconyTwoToneIcon />];
    case "room service":
      return [<RoomServiceOutlinedIcon />, <RoomServiceIcon />];
    case "flat-screen tv":
      return [<DesktopWindowsRoundedIcon />, <DesktopWindowsIcon />];
    case "tv":
      return [<DesktopWindowsRoundedIcon />, <DesktopWindowsIcon />];
    case "city view":
      return [<WindowOutlinedIcon />, <WindowIcon />];
    case "king size bed":
      return [<BedOutlinedIcon />, <BedIcon />];
    case "meeting room":
      return [<MeetingRoomOutlinedIcon />, <MeetingRoomIcon />];
    case "complimentary breakfast":
      return [<BreakfastDiningOutlinedIcon />, <BreakfastDiningIcon />];
    default:
      return [];
  }
};
