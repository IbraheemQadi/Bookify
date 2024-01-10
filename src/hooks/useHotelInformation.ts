import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Hotel } from "../entities/Hotel";

const useHotelInformation = (hotelId: number) => {
  const hotelInformationService = new APIClient<Hotel>(`/hotels/${hotelId}`);

  return useQuery<Hotel, Error>({
    queryKey: ["hotels", hotelId],
    queryFn: hotelInformationService.get,
  });
};
export default useHotelInformation;
