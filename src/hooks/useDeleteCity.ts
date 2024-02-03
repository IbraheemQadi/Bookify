import { useAdminDrawer } from "@/context/AdminDrawerContext";
import { City } from "@/entities/City";
import APIClient from "@/services/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteCity = (cityId: number) => {
  const { closeDrawer } = useAdminDrawer();
  const queryClient = useQueryClient();
  const updateCityService = new APIClient<City>(`/cities/${cityId}`);

  return useMutation({
    mutationFn: updateCityService.delete,
    onSuccess: (_, deletedCity: City) => {
      //   queryClient.invalidateQueries({ queryKey: ["cities"] });
      queryClient.setQueryData(["cities"], (oldCities: City[]) => {
        return oldCities.filter((city) => {
          if (city.id === deletedCity.id) {
            return false;
          }
          return true;
        });
      });
      closeDrawer();
    },
  });
};

export default useDeleteCity;
