import BookingCard from "@/component/BookingCard";
import BookingDetails from "@/component/BookingDetails";
import useBookingStore from "@/store/booking.store";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect } from "react";

const ConfirmationPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const unreserve = useBookingStore((state) => state.unreserve);

  useEffect(() => {
    return () => {
      unreserve();
    };
  }, [unreserve]);

  return (
    <Stack>
      <Box>
        <Typography variant="h4" gutterBottom textAlign={"center"}>
          Thank you for booking with us 🎉
        </Typography>
        <Typography variant="body1" gutterBottom textAlign={"center"}>
          Your reservation has been confirmed. ✅
        </Typography>
      </Box>
      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent={"center"}
        gap={2}
        mt={1}
      >
        <Box
          position={isMobile ? "static" : "sticky"}
          width={isMobile ? "80%" : "fit-content"}
          alignSelf={isMobile ? "center" : "start"}
          top={80}
        >
          <BookingCard />
        </Box>
        <BookingDetails />
      </Stack>
    </Stack>
  );
};

export default ConfirmationPage;
