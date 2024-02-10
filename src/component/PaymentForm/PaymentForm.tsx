import usePayment from "@/hooks/usePayment";
import useAuthStore from "@/store/auth.store";
import useBookingStore from "@/store/booking.store";
import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";

export default function PaymentForm() {
  const { hotel, room, checkInDate, checkOutDate, adults, children } =
    useBookingStore((state) => state.booking);
  const { user } = useAuthStore();
  const payment = usePayment();

  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      expirationDate: "",
      cvv: "",
      streetAddress: "",
      aptOrSuiteNumber: "",
      city: "",
      state: "",
      zipCode: "",
    },
    // validationSchema: validationSchema,
    onSubmit: () => {
      payment.mutate({
        customerName: user?.given_name + " " + user?.family_name,
        hotelName: hotel.hotelName,
        roomNumber: room.roomNumber,
        roomType: room.roomType,
        bookingDateTime: new Date().toISOString(),
        totalCost: room.price,
        paymentMethod: "card",
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
          <TextField
            fullWidth
            label="Card Number"
            variant="outlined"
            placeholder="0000 0000 0000 0000"
            {...formik.getFieldProps("cardNumber")}
            error={formik.touched.cardNumber && !!formik.errors.cardNumber}
            helperText={
              formik.touched.cardNumber &&
              formik.errors.cardNumber &&
              "Enter a valid card number"
            }
            sx={{ mb: 1 }}
          />
          <Stack direction="row" gap={1}>
            <TextField
              fullWidth
              label="Expiration Date (MM/YY)"
              variant="outlined"
              {...formik.getFieldProps("expirationDate")}
              error={
                formik.touched.expirationDate && !!formik.errors.expirationDate
              }
              helperText={
                formik.touched.expirationDate &&
                formik.errors.expirationDate &&
                "Enter a valid expiration date"
              }
            />
            <TextField
              fullWidth
              label="CVV"
              variant="outlined"
              {...formik.getFieldProps("cvv")}
              error={formik.touched.cvv && !!formik.errors.cvv}
              helperText={
                formik.touched.cvv && formik.errors.cvv && "Enter a valid cvv"
              }
            />
          </Stack>
          <Stack gap={1}>
            <Typography my={0.5} variant="body1">
              Billing address
            </Typography>
            <TextField
              fullWidth
              label="Street address"
              variant="outlined"
              {...formik.getFieldProps("streetAddress")}
              error={
                formik.touched.streetAddress && !!formik.errors.streetAddress
              }
              helperText={
                formik.touched.streetAddress &&
                formik.errors.streetAddress &&
                "Street address is required"
              }
            />
            <TextField
              fullWidth
              label="Apt or suite number"
              variant="outlined"
              {...formik.getFieldProps("aptOrSuiteNumber")}
              error={
                formik.touched.aptOrSuiteNumber &&
                !!formik.errors.aptOrSuiteNumber
              }
              helperText={
                formik.touched.aptOrSuiteNumber &&
                formik.errors.aptOrSuiteNumber &&
                "Apt or suite number is required"
              }
            />
            <Stack direction="row" gap={1}>
              <TextField
                fullWidth
                label="City"
                variant="outlined"
                {...formik.getFieldProps("city")}
                error={formik.touched.city && !!formik.errors.city}
                helperText={
                  formik.touched.city &&
                  formik.errors.city &&
                  "City is required"
                }
              />
              <TextField
                fullWidth
                label="State"
                variant="outlined"
                {...formik.getFieldProps("state")}
                error={formik.touched.state && !!formik.errors.state}
                helperText={formik.touched.state && formik.errors.state}
              />
              <TextField
                fullWidth
                label="Zip code"
                variant="outlined"
                {...formik.getFieldProps("zipCode")}
                error={formik.touched.zipCode && !!formik.errors.zipCode}
                helperText={
                  formik.touched.zipCode &&
                  formik.errors.zipCode &&
                  "Enter a valid zip code"
                }
              />
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
    </form>
  );
}
