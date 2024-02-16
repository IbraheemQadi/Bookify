import HotelIcon from "@mui/icons-material/Hotel";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

const links = [
  {
    title: "Cities",
    icon: <LocationCityIcon />,
    path: "/admin",
  },
  {
    title: "Hotels",
    icon: <HotelIcon />,
    path: "/admin/hotels",
  },
  {
    title: "Rooms",
    icon: <MeetingRoomIcon />,
    path: "/admin/rooms",
  },
];

export default links;
