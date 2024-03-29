import BookingCard from "@/components/BookingCard";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import PaymentForm from "./components/PaymentForm";

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
      <PaymentForm />
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
