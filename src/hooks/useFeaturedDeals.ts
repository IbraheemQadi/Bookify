import { useQuery } from "@tanstack/react-query";
import { Hotel } from "../entities/Hotel";
import APIClient from "../services/apiClient";

const featuredDealsService = new APIClient<Hotel[]>(`/home/featured-deals`);

const useFeaturedDeals = () => {
  return useQuery<Hotel[], Error>({
    queryKey: ["featuredDeals"],
    queryFn: featuredDealsService.get,
  });
};
export default useFeaturedDeals;
