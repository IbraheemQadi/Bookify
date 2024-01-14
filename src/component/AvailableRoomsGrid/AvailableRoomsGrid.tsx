import { Box, Grid, Typography } from "@mui/material";
// import { availableRooms } from "../../data/availableRooms";
import { useLocation, useParams } from "react-router-dom";
import { Hotel } from "../../entities/Hotel";
import useAvailableRooms from "../../hooks/useAvailableRooms";
import RoomCard from "../RoomCard";

interface Props {
  hotel: Hotel;
}

const AvailableRoomsGrid = ({ hotel }: Props) => {
  const { id } = useParams();
  const hotelId = parseInt(id || "");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const checkInDate = queryParams.get("checkInDate");
  const checkOutDate = queryParams.get("checkOutDate");

  const { data: availableRooms } = useAvailableRooms(
    hotelId,
    checkInDate || "",
    checkOutDate || ""
  );

  return (
    <Box>
      <Typography variant="h4" component="h2" mb={3}>
        Available Rooms
      </Typography>
      <Grid container spacing={1}>
        {availableRooms?.map((room) => (
          <Grid item xs={12} sm={6} md={4} key={room.roomNumber}>
            <RoomCard hotel={hotel} room={room} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AvailableRoomsGrid;
