import { useAdminDrawer } from "@/context/AdminDrawerContext";
import { City } from "@/entities/City";
import APIClient from "@/services/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useCreateCity = () => {
  const queryClient = useQueryClient();
  const updateCityService = new APIClient<City>("cities");
  const { closeDrawer } = useAdminDrawer();

  return useMutation({
    mutationFn: updateCityService.post,
    onSuccess: (savedCity) => {
      //   queryClient.invalidateQueries({ queryKey: ["cities"] });
      queryClient
        .getQueryCache()
        .findAll({ queryKey: ["cities"] })
        .forEach((query) => {
          queryClient.setQueryData(query.queryKey, (oldCities: City[]) => {
            return [...oldCities, savedCity];
          });
        });
      toast.success("City created successfully");
      closeDrawer();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useCreateCity;
