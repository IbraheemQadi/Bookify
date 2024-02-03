import useBookingStore from "@/store/booking.store";
import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Divider,
  Paper,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const StyledImg = styled("img")({
  objectFit: "cover",
  borderRadius: "5px",
  width: "100%",
  height: "100%",
});

const StyledPaper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  gap: 15,
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0px 6px 16px 0px rgba(0, 0, 0, 0.12)",
});

function BookingCard() {
  const { hotel, room } = useBookingStore((state) => state.booking);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledPaper variant="outlined" sx={{ width: isMobile ? "100%" : "480px" }}>
      <Stack direction={isMobile ? "column" : "row"} gap={2}>
        <Box
          sx={{
            overflow: "hidden",
            width: isMobile ? "100%" : "125px",
            height: "105px",
          }}
        >
          <StyledImg src={room.roomPhotoUrl} alt="" />
        </Box>
        <Box flex={1} position={"relative"} pr={2}>
          <Stack
            mb={0.3}
            direction={"row"}
            justifyContent={"start"}
            alignItems={"center"}
          >
            <Typography mr={1} variant="body1" color="text.secondary">
              {hotel.location}
            </Typography>
          </Stack>
          <Typography mb={0.5} fontWeight={"bold"} variant={"h5"}>
            {hotel.hotelName}
          </Typography>
          <Stack
            position={isMobile ? "static" : "absolute"}
            bottom={0}
            direction="row"
            justifyContent="start"
            alignItems="center"
          >
            <StarIcon fontSize="small" color="primary" />
            <Typography color={"secondary"} variant={"body1"}>
              {hotel.starRating}
            </Typography>
            <Typography pl={1} color={"secondary"} variant={"body1"}>
              ({room.roomType} Room)
            </Typography>
          </Stack>
        </Box>
      </Stack>

      <Divider />

      <Stack>
        <Typography variant="h6" fontWeight="bold">
          Price Details
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body1">Room Price</Typography>
          <Typography variant="body1">${room.price}</Typography>
        </Stack>
      </Stack>

      <Divider />

      <Stack direction="row" justifyContent="space-between">
        <Typography fontWeight="bold" variant="body1">
          Total (USD)
        </Typography>
        <Typography fontWeight="bold" variant="body1">
          ${room.price}
        </Typography>
      </Stack>
    </StyledPaper>
  );
}

export default BookingCard;
