import Search from "@/component/Search";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import FeaturedDeals from "./components/FeaturedDeals";
import RecentlyHotels from "./components/RecentlyHotels";
import TrendingDestinations from "./components/TrendingDestinations";

function HomePage() {
  const theme = useTheme();
  const isMeduimScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        sx={{
          transform: isMeduimScreen ? "" : "translateY(-110px)",
          my: isMeduimScreen ? 2 : 0,
        }}
      >
        <Search />
      </Box>
      <Stack gap={4}>
        <TrendingDestinations />
        <RecentlyHotels />
        <FeaturedDeals />
      </Stack>
    </>
  );
}

export default HomePage;
