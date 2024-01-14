import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import useBookingStore from "@/store/booking.store";

function BookingDetail() {
  const { checkInDate, checkOutDate, adults, children } = useBookingStore(
    (state) => state.booking
  );
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleSubmit = () => {
    alert("Booking confirmed");
  };

  return (
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
            {checkInDate + " ➡ " + checkOutDate}
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h6">Guests</Typography>
          <Typography variant="body1">
            {adults + " Adults, " + children + " Children"}
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
        />
        <Stack direction="row" gap={1}>
          <TextField fullWidth label="Expiration" variant="outlined" />
          <TextField fullWidth label="CVV" variant="outlined" />
        </Stack>
        <Stack gap={1}>
          <Typography my={0.5} variant="body1">
            Billing address
          </Typography>
          <TextField fullWidth label="Street address" variant="outlined" />
          <TextField fullWidth label="Apt or suite number" variant="outlined" />
          <Stack direction="row" gap={1}>
            <TextField fullWidth label="City" variant="outlined" />
            <TextField fullWidth label="State" variant="outlined" />
            <TextField fullWidth label="Zip code" variant="outlined" />
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
        onClick={handleSubmit}
      >
        Confirm and pay
      </Button>

      <Stack gap={1}>
        {/* <Typography fontWeight="bold" variant="h5">
          Contact information
        </Typography>
        <Typography variant="body2">
          We ask every guest to remember a few simple things about what makes a
          great guest. Follow the house rules Treat your Host’s home like your
          own
        </Typography>
        <TextField
          fullWidth
          label="Email address"
          variant="outlined"
          {...formik.getFieldProps("email")}
        />
        <TextField
          fullWidth
          label="Phone number"
          variant="outlined"
          {...formik.getFieldProps("password")}
        />
        <Typography variant="body2">
          By proceeding, I agree to the website{" "}
          <Typography component="span" color="primary">
            terms and conditions
          </Typography>{" "}
          and{" "}
          <Typography component="span" color="primary">
            privacy policy
          </Typography>
          .
        </Typography> */}
      </Stack>
    </Stack>
  );
}

export default BookingDetail;
