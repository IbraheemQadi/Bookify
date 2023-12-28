import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HotelCard from "../Hotel/HotelCard";
import HotelCardSkeleton from "../Hotel/HotelCardSkeleton";
import SkeletonContainer from "../SkeletonContainer";
import data from "../../data/hotels";

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

const RecentlyHotels = () => {
  const isLoading = false;

  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ ml: "8px" }}>
        <Typography variant="h5" component="h2">
          Recently Visited Hotels
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
          Hotels you have visited in the last 30 days
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
            >
              <HotelCard key={index} hotel={hotel} />
            </Box>
          ))}
        </Carousel>
      )}
    </Box>
  );
};

export default RecentlyHotels;
