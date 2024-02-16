import { City } from "@/entities/City";
import APIClient from "@/services/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useUpdateCity = (cityId: number) => {
  const queryClient = useQueryClient();
  const updateCityService = new APIClient<City>(`/cities/${cityId}`);

  return useMutation({
    mutationFn: updateCityService.put,
    onSuccess: (_, updatedCity: City) => {
      //   queryClient.invalidateQueries({ queryKey: ["cities"] });
      queryClient
        .getQueryCache()
        .findAll({ queryKey: ["cities"] })
        .forEach((query) => {
          queryClient.setQueryData(query.queryKey, (oldCities: City[]) => {
            return oldCities.map((city) => {
              if (city.id === updatedCity.id) {
                return updatedCity;
              }
              return city;
            });
          });
        });
      toast.success("City updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useUpdateCity;
