import { Box, Skeleton } from "@mui/material";

const HotelCardSkeleton = () => {
  return (
    <Box>
      <Skeleton variant="rounded" width={280} height={195} />
      <Skeleton variant="text" width={200} />
      <Skeleton variant="text" width={150} />
      <Skeleton variant="text" width={100} />
    </Box>
  );
};

export default HotelCardSkeleton;
