import { useQuery } from "@tanstack/react-query";
import { Hotel } from "../entities/Hotel";
import APIClient from "../services/apiClient";

const useRecentlyHotels = (userId: number) => {
  const recentlyHotelsService = new APIClient<Hotel[]>(
    `/home/users/${userId}/recent-hotels`
  );

  return useQuery<Hotel[], Error>({
    queryKey: ["recentlyHotels"],
    queryFn: recentlyHotelsService.get,
  });
};

export default useRecentlyHotels;
