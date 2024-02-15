import { Room } from "@/entities/Room";
import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

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
