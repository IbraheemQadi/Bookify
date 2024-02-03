import { useAdminDrawer } from "@/context/AdminDrawerContext";
import { City } from "@/entities/City";
import APIClient from "@/services/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateCity = () => {
  const { closeDrawer } = useAdminDrawer();
  const queryClient = useQueryClient();
  const updateCityService = new APIClient<City>("cities");

  return useMutation({
    mutationFn: updateCityService.post,
    onSuccess: (savedCity) => {
      //   queryClient.invalidateQueries({ queryKey: ["cities"] });
      queryClient.setQueryData(["cities"], (oldCities: City[]) => {
        return [...oldCities, savedCity];
      });
      closeDrawer();
    },
  });
};

export default useCreateCity;
