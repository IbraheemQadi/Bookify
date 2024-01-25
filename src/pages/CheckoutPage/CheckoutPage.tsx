import BookingCard from "@/component/BookingCard";
import BookingDetail from "@/component/BookingDetail";
import { Box, Stack } from "@mui/material";

function CheckoutPage() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="start"
      gap={6}
    >
      <Box flexGrow={1}>
        <BookingDetail />
      </Box>
      <Box position="sticky" top={80} mt={11}>
        <BookingCard />
      </Box>
    </Stack>
  );
}

export default CheckoutPage;
