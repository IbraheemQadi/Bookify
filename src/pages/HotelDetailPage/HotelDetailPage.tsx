import { Divider, Stack, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import AvailableRoomsGrid from "../../component/AvailableRoomsGrid";
import HotelGallery from "../../component/HotelGallery";
import HotelInformation from "../../component/HotelInformation/HotelInformation";
import useHotelInformation from "../../hooks/useHotelInformation";

function HotelDetailPage() {
  const { id } = useParams();
  const hotelId = parseInt(id || "");
  const { data: hotel, error } = useHotelInformation(hotelId);
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const checkInDate = queryParams.get("checkInDate");
  const checkOutDate = queryParams.get("checkOutDate");

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
      <AvailableRoomsGrid
        hotelId={hotelId}
        checkInDate={checkInDate || ""}
        checkOutDate={checkOutDate || ""}
      />
    </Stack>
  );
}

export default HotelDetailPage;
