import { Box, Grid, Typography } from "@mui/material";
import { availableRooms } from "../../data/availableRooms";
import RoomCard from "../RoomCard";

const AvailableRoomsGrid = () => {
  return (
    <Box>
      <Typography variant="h4" component="h2" mb={3}>
        Available Rooms
      </Typography>
      <Grid container spacing={1}>
        {availableRooms.map((room) => (
          <Grid item xs={12} sm={6} md={4} key={room.roomNumber}>
            <RoomCard room={room} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AvailableRoomsGrid;
