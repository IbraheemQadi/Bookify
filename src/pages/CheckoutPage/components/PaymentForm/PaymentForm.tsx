import FormikTextField from "@/component/common/FormikTextField";
import useAuthStore from "@/store/auth.store";
import useBookingStore from "@/store/booking.store";
import { Button, Divider, Stack, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import usePayment from "../../hooks/usePayment";
// import validationSchema from "./validationSchema";

export default function PaymentForm() {
  const { hotel, room, checkInDate, checkOutDate, adults, children } =
    useBookingStore((state) => state.booking);
  const { user } = useAuthStore();
  const payment = usePayment();

  const initialValues = {
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    streetAddress: "",
    aptOrSuiteNumber: "",
    city: "",
    state: "",
    zipCode: "",
  };

  const handleSubmit = () => {
    payment.mutate({
      customerName: user?.given_name + " " + user?.family_name,
      hotelName: hotel.hotelName,
      roomNumber: room.roomNumber,
      roomType: room.roomType,
      bookingDateTime: new Date().toISOString(),
      totalCost: room.price,
      paymentMethod: "card",
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Stack gap={2}>
          <Typography mb={3} fontWeight="bold" variant="h4" component="h1">
            Confirm and pay
          </Typography>
          <Stack gap={1}>
            <Typography fontWeight="bold" variant="h5">
              Your trip
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6">Dates</Typography>
              <Typography variant="body1">
                📅 {checkInDate + " ➡ " + checkOutDate}
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6">Guests</Typography>
              <Typography variant="body1">
                {adults + " Adults 🧑🏻, " + children + " Children 🧒🏻"}
              </Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack gap={1}>
            <Typography fontWeight="bold" variant="h5">
              Pay With
            </Typography>
            <FormikTextField
              name="cardNumber"
              label="Card Number"
              placeholder="0000 0000 0000 0000"
            />
            <Stack direction="row" gap={1}>
              <FormikTextField
                name="expirationDate"
                label="Expiration Date (MM/YY)"
                fullWidth
              />
              <FormikTextField name="cvv" label="CVV" fullWidth />
            </Stack>
            <Stack gap={1}>
              <Typography my={0.5} variant="body1">
                Billing address
              </Typography>
              <FormikTextField name="streetAddress" label="Street address" />
              <FormikTextField
                name="aptOrSuiteNumber"
                label="Apt or suite number"
              />
              <Stack direction="row" gap={1}>
                <FormikTextField name="city" label="City" />
                <FormikTextField name="state" label="State" />
                <FormikTextField name="zipCode" label="Zip code" />
              </Stack>
            </Stack>
          </Stack>
          <Divider />
          <Button
            sx={{
              width: "fit-content",
              py: 2,
              borderRadius: "15px",
              textTransform: "none",
            }}
            variant="contained"
            color="primary"
            type="submit"
            disabled={payment.isPending}
          >
            {payment.isPending ? "Processing..." : "Request to Book"}
          </Button>
        </Stack>
      </Form>
    </Formik>
  );
}
