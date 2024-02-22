import { Hotel as HotelType } from "@/entities/Hotel";
import StarIcon from "@mui/icons-material/Star";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import renderHotelPrice from "../utils/renderHotelPrice";

const HotelCardVertical = ({ hotel }: { hotel: HotelType }) => {
  return (
    <Card sx={{ paddingInline: "12px", pt: "12px" }}>
      <CardMedia
        sx={{ filter: "brightness(90%)", borderRadius: "5px" }}
        component="img"
        height="195"
        image={hotel.thumbnailUrl || hotel.roomPhotoUrl}
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
            <Stack direction="row" alignItems="center">
              <StarIcon sx={{ fontSize: "large" }} color="secondary" />
              <Typography variant="body2" component="span" color="secondary">
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
          {renderHotelPrice(hotel)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HotelCardVertical;
