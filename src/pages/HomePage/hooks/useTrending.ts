import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Destination } from "../entities/Destination";

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
