import APIClient from "@/services/apiClient";
import { useMutation } from "@tanstack/react-query";

const paymentService = new APIClient("/bookings");

const usePayment = () => {
  return useMutation({
    mutationFn: paymentService.post,
    onSuccess: () => {
      console.log("Payment successful");
    },
    onError: () => {
      console.log("Payment failed");
    },
  });
};

export default usePayment;
