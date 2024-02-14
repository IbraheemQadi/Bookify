import { Hotel } from "@/entities/Hotel";
import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const featuredDealsService = new APIClient<Hotel[]>(`/home/featured-deals`);

const useFeaturedDeals = () => {
  return useQuery<Hotel[], Error>({
    queryKey: ["featuredDeals"],
    queryFn: featuredDealsService.get,
  });
};
export default useFeaturedDeals;
