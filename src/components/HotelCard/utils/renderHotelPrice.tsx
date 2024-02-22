import { Hotel } from "@/entities/Hotel";
import { Typography } from "@mui/material";

const renderHotelPrice = (hotel: Hotel) => {
  if (hotel.finalPrice) {
    return (
      <span>
        <Typography
          variant="body2"
          component="span"
          color="text.secondary"
          sx={{ textDecoration: "line-through" }}
        >
          {`$${hotel.originalRoomPrice}`}
        </Typography>
        <Typography
          fontWeight="bold"
          variant="body1"
          component="span"
          color="secondary"
        >
          {` $${hotel.finalPrice}`}
        </Typography>
      </span>
    );
  } else if (hotel.originalRoomPrice) {
    return `$${hotel.originalRoomPrice}`;
  }
};

export default renderHotelPrice;
