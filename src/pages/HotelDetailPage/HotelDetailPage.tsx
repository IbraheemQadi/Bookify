import { Divider, Stack } from "@mui/material";
import AvailableRoomsGrid from "../../component/AvailableRoomsGrid";
import HotelGallery from "../../component/HotelGallery";
import HotelInformation from "../../component/HotelInformation/HotelInformation";

function HotelDetailPage() {
  return (
    <Stack gap={4}>
      <HotelGallery hotelId={1} />
      <HotelInformation hotel={null} />
      <Divider />
      <AvailableRoomsGrid />
    </Stack>
  );
}

export default HotelDetailPage;
