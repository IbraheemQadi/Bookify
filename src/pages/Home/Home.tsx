import FeaturedDeals from "@/component/FeaturedDeals";
import RecentlyHotels from "@/component/RecentlyHotels";
import Search from "@/component/Search";
import TrendingDestinations from "@/component/TrendingDestinations";
import { Box, Stack } from "@mui/material";

function Home() {
  return (
    <>
      <Box sx={{ transform: "translateY(-110px)", position: "absolute" }}>
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

export default Home;
