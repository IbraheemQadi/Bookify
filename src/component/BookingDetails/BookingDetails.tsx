import useBookingStore from "@/store/booking.store";
import { Paper, Typography } from "@mui/material";
import DetailItem from "./DetailItem";

function BookingDetails() {
  const { bookingDetails } = useBookingStore((state) => state.booking);
  return (
    <Paper variant="outlined" sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Booking Details
      </Typography>
      <DetailItem
        label="Customer Name"
        value={bookingDetails?.customerName || ""}
      />
      <DetailItem label="Hotel Name" value={bookingDetails?.hotelName || ""} />
      <DetailItem
        label="Room Number"
        value={bookingDetails?.roomNumber || ""}
      />
      <DetailItem label="Room Type" value={bookingDetails?.roomType || ""} />
      <DetailItem
        label="Booking Date"
        value={new Date(
          bookingDetails?.bookingDateTime ?? Date()
        ).toLocaleString()}
      />
      <DetailItem
        label="Payment Method"
        value={bookingDetails?.paymentMethod || ""}
      />
      <DetailItem
        label="Confirmation Number"
        value={bookingDetails?.confirmationNumber || ""}
      />
      <DetailItem
        label="Booking Status"
        value={bookingDetails?.bookingStatus || ""}
      />
      <DetailItem
        label="Total Cost"
        value={bookingDetails?.totalCost || 0}
        isLast
      />
    </Paper>
  );
}

export default BookingDetails;
