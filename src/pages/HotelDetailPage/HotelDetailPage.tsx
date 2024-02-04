import AvailableRoomsGrid from "@/component/AvailableRoomsGrid";
import HotelGallery from "@/component/HotelGallery";
import HotelInformation from "@/component/HotelInformation";
import { Hotel } from "@/entities/Hotel";
import useHotelInformation from "@/hooks/useHotelInformation";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import {
  Box,
  Divider,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useParams } from "react-router-dom";

export default function HotelDetailPage() {
  const { id } = useParams();
  const hotelId = parseInt(id || "");
  const { data: hotel, isLoading } = useHotelInformation(hotelId);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack gap={3}>
      {isLoading ? (
        <PageHeaderSkeleton />
      ) : (
        <PageHeader hotel={hotel ?? ({} as Hotel)} />
      )}
      <HotelGallery hotelId={hotelId} />
      <Divider />
      {isLoading ? (
        <PageBodySkeleton />
      ) : (
        <Stack gap={3} direction={isMobile ? "column" : "row"} mt={2}>
          <HotelInformation hotel={hotel ?? ({} as Hotel)} />
          <Box>
            <AvailableRoomsGrid hotel={hotel ?? ({} as Hotel)} />
          </Box>
        </Stack>
      )}
    </Stack>
  );
}

function PageHeaderSkeleton() {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Skeleton variant="text" width={270} height={60} />
      <Skeleton variant="text" width={200} height={60} />
    </Stack>
  );
}

function PageBodySkeleton() {
  return (
    <Stack direction="row" justifyContent="space-between" gap={3}>
      <Skeleton variant="text" width={500} height={150} />
      <Skeleton variant="text" width={500} height={150} />
    </Stack>
  );
}

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
