import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Room } from "../entities/Room";

const useAvailableRooms = (
  hotelId: number,
  checkInDate: string,
  checkOutDate: string
) => {
  const availableRoomsService = new APIClient<Room[]>(
    `/hotels/${hotelId}/available-rooms?checkInDate=${checkInDate}&CheckOutDate=${checkOutDate}`
  );

  return useQuery<Room[], Error>({
    queryKey: ["hotels", hotelId, "available-rooms"],
    queryFn: availableRoomsService.get,
  });
};
export default useAvailableRooms;
