import { useQuery } from "@tanstack/react-query";
import { Hotel } from "../entities/Hotel";
import APIClient from "../services/apiClient";
import useSearchStore from "../store/search.store";

const useSearch = (searchParams: string) => {
  const sort = useSearchStore((state) => state.sort.toString());

  const searchService = new APIClient<Hotel[]>(
    `/home/search?${searchParams}&sort=${sort}`
  );

  return useQuery<Hotel[], Error>({
    queryKey: ["search", sort],
    queryFn: searchService.get,
  });
};

export default useSearch;
