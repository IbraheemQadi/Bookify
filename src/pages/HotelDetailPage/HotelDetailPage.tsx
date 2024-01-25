import AvailableRoomsGrid from "@/component/AvailableRoomsGrid";
import HotelGallery from "@/component/HotelGallery";
import HotelInformation from "@/component/HotelInformation/HotelInformation";
import useHotelInformation from "@/hooks/useHotelInformation";
import { Divider, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

function HotelDetailPage() {
  const { id } = useParams();
  const hotelId = parseInt(id || "");
  const { data: hotel, error } = useHotelInformation(hotelId);

  if (error) {
    return (
      <Typography variant="h6">Error loading hotel information</Typography>
    );
  }

  return (
    <Stack gap={4}>
      <HotelGallery hotelId={hotelId} />
      {hotel && <HotelInformation hotel={hotel} />}
      <Divider />
      <AvailableRoomsGrid hotel={hotel} />
    </Stack>
  );
}

export default HotelDetailPage;
