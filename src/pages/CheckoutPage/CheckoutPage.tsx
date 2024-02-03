import BookingCard from "@/component/BookingCard";
import BookingDetail from "@/component/BookingDetail";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";

function CheckoutPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      direction={isMobile ? "column-reverse" : "row"}
      justifyContent="space-between"
      alignItems={isMobile ? "center" : "start"}
      gap={6}
    >
      <Box>
        <BookingDetail />
      </Box>
      <Box
        position={isMobile ? "static" : "sticky"}
        width={isMobile ? "80%" : "fit-content"}
        top={80}
        mt={11}
      >
        <BookingCard />
      </Box>
    </Stack>
  );
}

export default CheckoutPage;
