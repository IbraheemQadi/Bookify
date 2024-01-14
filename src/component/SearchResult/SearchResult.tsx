import useSearch from "@/hooks/useSearch";
import useSearchStore from "@/store/search.store";
import getFilteredHotels from "@/utils/getFilteredHotels";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import Hotel from "../HotelCard";
import HotelCardSkeleton from "../HotelCardSkeleton";

interface Props {
  searchParams: string;
}

function SearchResult({ searchParams }: Props) {
  const { data: hotels, isLoading } = useSearch(searchParams);
  const starRating = useSearchStore((state) => state.starRating);
  const amenities = useSearchStore((state) => state.amenities);
  const priceRange = useSearchStore((state) => state.priceRange);
  const setPriceRange = useSearchStore((state) => state.setPriceRange);
  const setPriceRangeMin = useSearchStore((state) => state.setPriceRangeMin);
  const setPriceRangeMax = useSearchStore((state) => state.setPriceRangeMax);

  const filteredHotels = getFilteredHotels(
    hotels || [],
    starRating,
    amenities,
    priceRange
  );

  useEffect(() => {
    if (hotels?.length !== 0) {
      const lowestPriceHotel = hotels?.reduce((prev, curr) =>
        prev?.roomPrice < curr?.roomPrice ? prev : curr
      );

      const highestPriceHotel = hotels?.reduce((prev, curr) =>
        prev?.roomPrice > curr?.roomPrice ? prev : curr
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
