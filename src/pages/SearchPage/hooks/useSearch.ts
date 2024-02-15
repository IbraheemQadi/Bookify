import { Hotel } from "@/entities/Hotel";
import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import useUserSearchStore from "../store/userSearch.store";

const useSearch = (searchParams: string) => {
  const sort = useUserSearchStore((state) => state.sort.toString());

  const searchService = new APIClient<Hotel[]>(
    `/home/search?${searchParams}&sort=${sort}`
  );

  return useQuery<Hotel[], Error>({
    queryKey: ["search", sort],
    queryFn: searchService.get,
  });
};

export default useSearch;
