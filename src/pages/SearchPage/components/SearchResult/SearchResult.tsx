import Hotel from "@/component/HotelCard";
import HotelCardSkeleton from "@/component/HotelCardSkeleton";
import getFilteredHotels from "@/utils/getFilteredHotels";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import useSearch from "../../hooks/useSearch";
import useUserSearchStore from "../../store/userSearch.store";

interface Props {
  searchParams: string;
}

function SearchResult({ searchParams }: Props) {
  const { data: hotels, isLoading } = useSearch(searchParams);
  const starRating = useUserSearchStore((state) => state.starRating);
  const amenities = useUserSearchStore((state) => state.amenities);
  const priceRange = useUserSearchStore((state) => state.priceRange);
  const setPriceRange = useUserSearchStore((state) => state.setPriceRange);
  const setPriceRangeMin = useUserSearchStore(
    (state) => state.setPriceRangeMin
  );
  const setPriceRangeMax = useUserSearchStore(
    (state) => state.setPriceRangeMax
  );

  const filteredHotels = getFilteredHotels(
    hotels || [],
    starRating,
    amenities,
    priceRange
  );

  useEffect(() => {
    if (hotels?.length !== 0) {
      const lowestPriceHotel = hotels?.reduce((prev, curr) =>
        (prev?.roomPrice ?? 0) < (curr?.roomPrice ?? 0) ? prev : curr
      );

      const highestPriceHotel = hotels?.reduce((prev, curr) =>
        (prev?.roomPrice ?? 0) > (curr?.roomPrice ?? 0) ? prev : curr
      );

      setPriceRangeMin(lowestPriceHotel?.roomPrice || 0);
      setPriceRangeMax(highestPriceHotel?.roomPrice || 0);

      setPriceRange([
        lowestPriceHotel?.roomPrice || 0,
        highestPriceHotel?.roomPrice || 0,
      ]);
    }
  }, [hotels, setPriceRange, setPriceRangeMax, setPriceRangeMin]);

  if (filteredHotels.length === 0 && !isLoading) {
    return (
      <Stack gap={2}>
        {/* empty search  */}
        <HotelCardSkeleton variant="horizontal" />
      </Stack>
    );
  }

  return (
    <Stack gap={2}>
      {isLoading
        ? Array.from({ length: 5 }, () => (
            <HotelCardSkeleton variant="horizontal" />
          ))
        : filteredHotels.map((hotel) => (
            <Hotel hotel={hotel} variant="horizontal" />
          ))}
    </Stack>
  );
}

export default SearchResult;
