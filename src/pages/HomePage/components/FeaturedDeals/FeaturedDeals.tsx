import HotelCard from "@/component/HotelCard";
import HotelCardSkeleton from "@/component/HotelCardSkeleton";
import SkeletonContainer from "@/pages/HomePage/components/SkeletonContainer";
import responsive from "@/data/carouselConfig";
import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import useFeaturedDeals from "../../hooks/useFeaturedDeals";

const FeaturedDeals = () => {
  const { data, isLoading } = useFeaturedDeals();

  return (
    <Box>
      <Box sx={{ ml: "8px" }}>
        <Typography variant="h5" component="h2">
          Featured Deals
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
          Promotions, deals and special offers for you
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

export default FeaturedDeals;
