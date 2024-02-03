import { Grid, Paper } from "@mui/material";

import { Hotel } from "@/entities/Hotel";
import useAvailableRooms from "@/hooks/useAvailableRooms";
import { useLocation, useParams } from "react-router-dom";
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
    <Paper elevation={3} sx={{ p: 1 }}>
      <Grid container spacing={1}>
        {availableRooms?.map((room) => (
          <Grid item xs={12} sm={6} md={12} lg={6}>
            <RoomCard key={room.roomNumber} hotel={hotel} room={room} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default AvailableRoomsGrid;
