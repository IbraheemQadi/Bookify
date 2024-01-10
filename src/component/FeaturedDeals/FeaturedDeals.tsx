import { Box, Typography } from "@mui/material";
import SkeletonContainer from "../SkeletonContainer";
import HotelCardSkeleton from "../HotelCardSkeleton";
import Carousel from "react-multi-carousel";
// import data from "../../data/hotels";
import HotelCard from "../HotelCard/HotelCard";
import useFeaturedDeals from "../../hooks/useFeaturedDeals";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 4,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

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
        <SkeletonContainer
          Children={HotelCardSkeleton}
          numberOfSkeletons={4}
          direction="row"
        />
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
              key={hotel.id}
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
