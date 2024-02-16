import { useAdminDrawer } from "@/pages/AdminLayout/context/AdminDrawerContext";
import { City } from "@/entities/City";
import APIClient from "@/services/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useDeleteCity = (cityId: number) => {
  const queryClient = useQueryClient();
  const { closeDrawer } = useAdminDrawer();
  const updateCityService = new APIClient<City>(`/cities/${cityId}`);

  return useMutation({
    mutationFn: updateCityService.delete,
    onSuccess: (_, deletedCity: City) => {
      //   queryClient.invalidateQueries({ queryKey: ["cities"] });
      queryClient
        .getQueryCache()
        .findAll({ queryKey: ["cities"] })
        .forEach((query) => {
          queryClient.setQueryData(query.queryKey, (oldCities: City[]) => {
            return oldCities.filter((city) => {
              if (city.id === deletedCity.id) {
                return false;
              }
              return true;
            });
          });
        });
      toast.success("City deleted successfully");
      closeDrawer();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useDeleteCity;
