import { Hotel as HotelType } from "@/entities/Hotel";
import StarIcon from "@mui/icons-material/Star";
import {
    Box,
    Button,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledImg, StyledPaper } from "../styles";

const HotelCardHorizontal = ({ hotel }: { hotel: HotelType }) => {
  const navigate = useNavigate();
  const { search: searchParams } = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledPaper square={false} variant="outlined">
      <Box
        sx={{
          overflow: "hidden",
          width: isMobile ? "160px" : "200px",
          aspectRatio: "1",
        }}
      >
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
          direction={isMobile ? "column" : "row"}
          justifyContent="space-between"
          position={isMobile ? "static" : "absolute"}
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
            onClick={() =>
              navigate(`/user/hotel/${hotel.hotelId}${searchParams}`)
            }
            variant="contained"
            color="primary"
          >
            See availability
          </Button>
        </Stack>
      </Box>
    </StyledPaper>
  );
};

export default HotelCardHorizontal;
