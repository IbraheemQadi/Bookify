import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Box, Divider, Skeleton, Stack, Typography } from "@mui/material";
import { Hotel } from "../../entities/Hotel";
import Amenity from "../common/Amenity";

interface Props {
  hotel: Hotel;
}

function HotelInformation({ hotel }: Props) {
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
            {hotel.amenities?.map((amenity) => (
              <Amenity
                checked={true}
                size="medium"
                key={amenity.description}
                amenity={amenity}
              />
            ))}
          </Stack>
        </Box>
        <Box>
          <Typography variant="h4" component="h2" mb={3}>
            Location on Map
          </Typography>
          <Box>
            <iframe
              width={"550"}
              height="250"
              frameBorder="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=31.916989,35.206938+(My%20sfasdfasfd)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </Box>
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
