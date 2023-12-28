import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Hotel from "../../entities/Hotel";

interface Props {
  hotel: Hotel;
}

const HotelCard = ({ hotel }: Props) => {
  return (
    <Card sx={{ paddingInline: "12px", pt: "12px" }}>
      <CardMedia
        sx={{ filter: "brightness(90%)", borderRadius: "4px" }}
        component="img"
        height="195"
        image={hotel.thumbnailUrl}
      />
      <CardContent sx={{ pt: "8px", paddingInline: 0 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" component="span">
            {hotel.hotelName}
          </Typography>
          {hotel?.starRating && (
            <Stack direction="row" alignItems="center" color="text.primary">
              <StarIcon sx={{ fontSize: "large" }} />
              <Typography variant="body2" component="span">
                {hotel.starRating}
              </Typography>
            </Stack>
          )}
        </Stack>
        <Typography variant="body2" color="text.secondary" fontWeight="bold">
          {hotel.cityName}
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 3, textAlign: "end", fontWeight: "bold" }}
        >
          Price:{" "}
          {hotel.finalPrice ? (
            <del>${hotel.originalRoomPrice}</del>
          ) : (
            `$${hotel.originalRoomPrice}`
          )}
          {hotel.finalPrice && ` $${hotel.finalPrice}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HotelCard;
