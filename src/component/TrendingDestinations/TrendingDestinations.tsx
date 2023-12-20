import { Box, Grid, Typography } from "@mui/material";
import trendingDestinations from "../../data/trendingDestination.json";
import Destination from "../Destination";

const TrendingDestinations = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h5" component="h2">
          Trending Destinations
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
          Travellers searching for Spain also booked these
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} height={"260px"}>
          <Destination destination={trendingDestinations[0]} />
        </Grid>
        <Grid item xs={12} sm={6} height={"260px"}>
          <Destination destination={trendingDestinations[1]} />
        </Grid>
        <Grid item xs={12} sm={4} height={"260px"}>
          <Destination destination={trendingDestinations[2]} />
        </Grid>
        <Grid item xs={12} sm={4} height={"260px"}>
          <Destination destination={trendingDestinations[3]} />
        </Grid>
        <Grid item xs={12} sm={4} height={"260px"}>
          <Destination destination={trendingDestinations[4]} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrendingDestinations;
