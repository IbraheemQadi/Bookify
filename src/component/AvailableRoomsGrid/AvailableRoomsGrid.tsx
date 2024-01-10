import { Box, Grid, Typography } from "@mui/material";
// import { availableRooms } from "../../data/availableRooms";
import RoomCard from "../RoomCard";
import useAvailableRooms from "../../hooks/useAvailableRooms";

interface Props {
  hotelId: number;
  checkInDate: string;
  checkOutDate: string;
}

const AvailableRoomsGrid = ({ hotelId, checkInDate, checkOutDate }: Props) => {
  const { data: availableRooms } = useAvailableRooms(
    hotelId,
    checkInDate,
    checkOutDate
  );

  return (
    <Box>
      <Typography variant="h4" component="h2" mb={3}>
        Available Rooms
      </Typography>
      <Grid container spacing={1}>
        {availableRooms?.map((room) => (
          <Grid item xs={12} sm={6} md={4} key={room.roomNumber}>
            <RoomCard room={room} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AvailableRoomsGrid;
