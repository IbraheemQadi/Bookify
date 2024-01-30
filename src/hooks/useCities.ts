import { City } from "@/entities/City";
import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const useCities = (pageSize: number, pageNumber: number) => {
  const citiesService = new APIClient<City[]>(
    `/cities?pageSize=${pageSize}&pageNumber=${pageNumber}`
  );

  return useQuery<City[], Error>({
    queryKey: ["cities"],
    queryFn: citiesService.get,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export default useCities;
