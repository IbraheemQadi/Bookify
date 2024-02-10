import { BookingResponse } from "@/entities/BookingResponse";
import APIClient from "@/services/apiClient";
import useBookingStore from "@/store/booking.store";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const paymentService = new APIClient<unknown, BookingResponse>("/bookings");

const usePayment = () => {
  const navigate = useNavigate();
  const reserve = useBookingStore((state) => state.reserve);
  const booking = useBookingStore((state) => state.booking);

  return useMutation({
    mutationFn: paymentService.post,
    onSuccess: (data: BookingResponse) => {
      reserve({
        ...booking,
        bookingDetails: data,
      });
      toast.success("Payment successful");
      navigate("/user/confirmation", { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default usePayment;
