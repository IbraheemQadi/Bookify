import FeaturedDeals from "@/component/FeaturedDeals";
import RecentlyHotels from "@/component/RecentlyHotels";
import Search from "@/component/Search";
import TrendingDestinations from "@/component/TrendingDestinations";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";

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
