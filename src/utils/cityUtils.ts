import { City } from "@/entities/City";

export const sortCities = (cities: City[]) => {
  return [...cities].sort((a, b) => (a.id > b.id ? 1 : -1));
};

export const filterCities = (cities: City[], search: string) => {
  if (!search) return cities;
  return cities.filter((city) => {
    return (
      city.name.toLowerCase().includes(search.toLowerCase()) ||
      city.description.toLowerCase().includes(search.toLowerCase())
    );
  });
};
