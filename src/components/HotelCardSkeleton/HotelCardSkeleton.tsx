import { Box, Paper, Skeleton, Stack } from "@mui/material";

interface Props {
  variant: "horizontal" | "vertical";
}

const HotelCardSkeleton = ({ variant }: Props) => {
  if (variant === "horizontal")
    return (
      <Paper square={false} variant="outlined" sx={{ p: "10px" }}>
        <Stack direction="row" gap={2}>
          <Box>
            <Skeleton variant="rounded" width={200} height={200} />
          </Box>
          <Stack width="100%" position={"relative"}>
            <Skeleton variant="text" width={150} sx={{ mb: 1 }} />
            <Skeleton variant="text" width={100} />
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems="center"
              position={"absolute"}
              width="100%"
              bottom={0}
              mb={0.5}
            >
              <Box>
                <Skeleton variant="text" width={100} />
              </Box>
              <Box>
                <Skeleton variant="rounded" width={150} height={35} />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    );
  else
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
