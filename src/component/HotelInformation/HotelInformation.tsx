import { Box, Divider, Skeleton, Stack, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { hotelInfo } from "../../data/hotelInformation";
import Amenity from "../common/Amenity";

interface Props {
  hotel: any;
}

function HotelInformation({ hotel }: Props) {
  hotel = hotelInfo;
  return (
    <Stack gap={4}>
      <Box>
        <Typography variant="h1" component="h1" mb={0.5}>
          {hotel.hotelName}
        </Typography>
        <Stack
          color="text.secondary"
          direction="row"
          alignItems="center"
          gap={1}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <LocationOnOutlinedIcon />
            <Typography variant="body1" component="p">
              {hotel.location}
            </Typography>
          </Stack>
          <Divider orientation="vertical" flexItem />
          <Stack direction="row" alignItems="center" spacing={1}>
            <StarRateRoundedIcon />
            <Typography variant="body1" component="p">
              {hotel.starRating}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Divider />

      <Stack direction="row" alignItems="center" gap={10}>
        <Box alignSelf="start">
          <Typography variant="h4" component="h2" mb={3}>
            Amenities
          </Typography>
          <Stack
            justifySelf="start"
            direction="row"
            alignItems="center"
            spacing={2}
          >
            {hotel.amenities.map((hotel) => (
              <Amenity
                checked={true}
                size="medium"
                key={hotel}
                amenity={hotel}
              />
            ))}
          </Stack>
        </Box>
        <Box>
          <Typography variant="h4" component="h2" mb={3}>
            Location on Map
          </Typography>
          <Skeleton variant="rounded" width={400} height={200} />
        </Box>
      </Stack>

      <Divider />
      <Box>
        <Typography variant="h4" component="h2" mb={3}>
          Additional Information
        </Typography>
        <Typography variant="body1" component="p" width={"70%"}>
          {hotel.description}
        </Typography>
      </Box>
    </Stack>
  );
}

export default HotelInformation;
