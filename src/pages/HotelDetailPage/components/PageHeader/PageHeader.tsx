import { Hotel } from "@/entities/Hotel";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Stack, Typography } from "@mui/material";

function PageHeader({ hotel }: { hotel: Hotel }) {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="h2" component="h1" mb={0.5}>
        {hotel?.hotelName}
      </Typography>

      <Stack color="text.secondary" direction="row" alignItems="center" gap={1}>
        <Stack direction="row" alignItems="center" spacing={0}>
          <LocationOnOutlinedIcon />
          <Typography variant="body1" component="p">
            {hotel?.location}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={0}>
          <StarRateRoundedIcon />
          <Typography variant="body1" component="p">
            {hotel?.starRating}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default PageHeader;
