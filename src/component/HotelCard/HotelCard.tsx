import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Hotel as HotelType } from "@/entities/Hotel";
import { useLocation, useNavigate } from "react-router-dom";

interface Prop {
  hotel: HotelType;
  variant: "horizontal" | "vertical";
}

const StyledImg = styled("img")({
  objectFit: "cover",
  borderRadius: "5px",
  width: "100%",
  height: "100%",
});

const StyledPaper = styled(Paper)({
  display: "flex",
  flexDirection: "row",
  gap: 15,
  padding: "10px",
});

const HotelCard = ({ hotel, variant }: Prop) => {
  return variant === "horizontal" ? (
    <HotelCardHorizontal hotel={hotel} />
  ) : (
    <HotelCardVertical hotel={hotel} />
  );
};

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

const HotelCardHorizontal = ({ hotel }: { hotel: HotelType }) => {
  const navigate = useNavigate();
  const { search: searchParams } = useLocation();

  return (
    <StyledPaper square={false} variant="outlined">
      <Box sx={{ overflow: "hidden", width: "200px", height: "200px" }}>
        <StyledImg src={hotel.thumbnailUrl || hotel.roomPhotoUrl} alt="" />
      </Box>
      <Box flex={1} position={"relative"} pr={2}>
        <Stack
          mb={1}
          direction={"row"}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <Typography mr={1} variant={"body1"}>
            {hotel.cityName}
          </Typography>
          <Stack direction={"row"} justifyContent="start" alignItems={"center"}>
            <StarIcon fontSize="small" color="primary" />
            <Typography color={"secondary"} variant={"body1"}>
              {hotel.starRating}
            </Typography>
          </Stack>
        </Stack>
        <Typography mb={0.5} fontWeight={"bold"} variant={"h6"}>
          {hotel.hotelName}
        </Typography>
        <Typography variant={"body1"}>{hotel.description}</Typography>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          position={"absolute"}
          width={"100%"}
          bottom={0}
          mb={0.5}
        >
          <Typography color="primary" fontWeight={"bold"} variant={"h6"}>
            {hotel.finalPrice || hotel.roomPrice}
            <Typography component={"span"} color={"text.secondary"}>
              /night
            </Typography>
          </Typography>
          <Button
            onClick={() => navigate(`/hotel/${hotel.hotelId}${searchParams}`)}
            variant={"contained"}
            color={"primary"}
          >
            See availability
          </Button>
        </Stack>
      </Box>
    </StyledPaper>
  );
};

export default HotelCard;
