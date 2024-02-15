import BookingCard from "@/component/BookingCard";
import useBookingStore from "@/store/booking.store";
import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import BookingDetails from "./components/BookingDetails";

const ConfirmationPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const unreserve = useBookingStore((state) => state.unreserve);

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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
        <Stack direction="row-reverse">
          <Button
            onClick={handlePrint}
            variant="outlined"
            sx={{ width: "fit-content" }}
            color="primary"
          >
            Print
          </Button>
        </Stack>
      </Box>
      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent={"center"}
        gap={1}
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
        <Box ref={componentRef} px={1}>
          <BookingDetails />
        </Box>
      </Stack>
    </Stack>
  );
};

export default ConfirmationPage;
