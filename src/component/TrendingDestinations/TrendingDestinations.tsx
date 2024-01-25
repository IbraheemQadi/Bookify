import { Box, Grid, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import useTrending from "@/hooks/useTrending";
import Destination from "../Destination";

const TrendingDestinations = () => {
  const { data, isLoading } = useTrending();

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" component="h2">
          Trending Destinations
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
          Travellers searching for Spain also booked these
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {isLoading
          ? Array.from({ length: 5 }, (_, index) => (
              <Grid item xs={12} sm={index <= 1 ? 6 : 4} height={"260px"}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height="100%"
                  animation="wave"
                />
              </Grid>
            ))
          : data?.map((destination, index) => {
              return (
                <Grid item xs={12} sm={index <= 1 ? 6 : 4} height={"260px"}>
                  <Destination destination={destination} />
                </Grid>
              );
            })}
      </Grid>
    </Box>
  );
};

export default TrendingDestinations;
