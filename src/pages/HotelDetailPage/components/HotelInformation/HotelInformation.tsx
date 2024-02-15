import Amenity from "@/component/common/Amenity";
import { Hotel } from "@/entities/Hotel";
import { Box, Divider, Stack, Typography } from "@mui/material";

interface Props {
  hotel: Hotel;
}

function HotelInformation({ hotel }: Props) {
  return (
    <Stack alignItems="start" gap={3}>
      <Box alignSelf="start">
        <Box mb={2}>
          <Typography variant="h5" component="h2" mb={1}>
            {hotel.hotelName}
          </Typography>
          <Typography variant="body1" component="p">
            {hotel.description}
          </Typography>
        </Box>
        <Divider sx={{ marginBlock: 1 }} />
        <Typography variant="h5" component="h2" mb={3}>
          Amenities
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap={"wrap"}
          color="text.primary"
          gap={0.5}
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
        <Typography variant="h5" component="h2" mb={3}>
          Location on Map
        </Typography>
        <Box>
          <iframe
            width="350"
            height="250"
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=31.916989,35.206938+(My%20sfasdfasfd)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </Box>
      </Box>
    </Stack>
  );
}

export default HotelInformation;
