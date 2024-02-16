import { City } from "@/entities/City";
import APIClient from "@/services/apiClient";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

interface CitiesQuery {
  pageSize: number;
  pageNumber: number;
  name?: string;
}

const useCities = (query: CitiesQuery) => {
  const citiesService = new APIClient<City[]>(
    `/cities?pageSize=${query.pageSize}&pageNumber=${query.pageNumber}&name=${query.name}`
  );

  return useQuery<City[], Error>({
    queryKey: ["cities", query],
    queryFn: citiesService.get,
    staleTime: 1000 * 60 * 5, // 5 minutes
    placeholderData: keepPreviousData,
  });
};

export default useCities;
