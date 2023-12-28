import { Box, Grid, Typography } from "@mui/material";
import trendingDestinations from "../../data/trendingDestination.json";
import Destination from "../Destination";

const TrendingDestinations = () => {
  const isLoading = false;
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
        {trendingDestinations.map((destination, index) => {
          if (index <= 1)
            return (
              <Grid item xs={12} sm={6} height={"260px"}>
                <Destination isLoading={isLoading} destination={destination} />
              </Grid>
            );
          else
            return (
              <Grid item xs={12} sm={4} height={"260px"}>
                <Destination isLoading={isLoading} destination={destination} />
              </Grid>
            );
        })}
      </Grid>
    </Box>
  );
};

export default TrendingDestinations;
