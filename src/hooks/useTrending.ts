import { Destination } from "@/entities/Destination";
import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const trendingService = new APIClient<Destination[]>(
  "/home/destinations/trending"
);

const useTrending = () => {
  return useQuery<Destination[], Error>({
    queryKey: ["trending"],
    queryFn: trendingService.get,
  });
};

export default useTrending;
