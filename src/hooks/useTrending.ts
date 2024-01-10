import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
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
