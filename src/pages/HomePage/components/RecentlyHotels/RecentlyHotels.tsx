import responsive from "@/data/carouselConfig";
import useAuthStore from "@/store/auth.store";
import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HotelCard from "../../../../component/HotelCard";
import HotelCardSkeleton from "../../../../component/HotelCardSkeleton";
import SkeletonContainer from "../../../../component/SkeletonContainer";
import useRecentlyHotels from "../../hooks/useRecentlyHotels";

const RecentlyHotels = () => {
  const user = useAuthStore((state) => state.user);
  const { data, isLoading } = useRecentlyHotels(parseInt(user?.user_id || "0"));

  return (
    <Box>
      <Box sx={{ ml: "8px" }}>
        <Typography variant="h5" component="h2">
          Recently Visited Hotels
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
          Hotels you have visited in the last 30 days
        </Typography>
      </Box>
      {isLoading ? (
        <SkeletonContainer numberOfSkeletons={4} direction="row">
          <HotelCardSkeleton variant="vertical" />
        </SkeletonContainer>
      ) : (
        <Carousel
          removeArrowOnDeviceType={["tablet", "mobile"]}
          responsive={responsive}
          slidesToSlide={1}
        >
          {data?.map((hotel, index) => (
            <Box
              sx={{
                ml: index !== 0 ? 1 : 0,
                mr: index !== data?.length - 1 ? 1 : 0,
                marginBlock: 1,
              }}
              key={hotel.id + index}
            >
              <HotelCard hotel={hotel} variant="vertical" />
            </Box>
          ))}
        </Carousel>
      )}
    </Box>
  );
};

export default RecentlyHotels;
