import { City } from "@/entities/City";
import APIClient from "@/services/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateCity = (cityId: number) => {
  const updateCityService = new APIClient<City>(`/cities/${cityId}`);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCityService.put,
    onSuccess: (_, updatedCity: City) => {
      //   queryClient.invalidateQueries({ queryKey: ["cities"] });
      queryClient.setQueryData(["cities"], (oldCities: City[]) => {
        return oldCities.map((city) => {
          if (city.id === updatedCity.id) {
            return updatedCity;
          }
          return city;
        });
      });
    },
  });
};

export default useUpdateCity;
