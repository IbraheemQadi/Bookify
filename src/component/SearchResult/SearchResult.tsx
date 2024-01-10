import { Stack } from "@mui/material";
// import { Hotel as HotelType } from "../../entities/Hotel";
import useSearch from "../../hooks/useSearch";
import Hotel from "../HotelCard";
import HotelCardSkeleton from "../HotelCardSkeleton";
import useSearchStore from "../../store/search.store";
import { Hotel as HotelType } from "../../entities/Hotel";

interface Props {
  searchParams: string;
}

const filterHotels = (
  hotels: HotelType[],
  starRating: number,
  amenities: string[]
) => {
  return hotels?.filter((hotel) => {
    if (starRating && hotel.starRating !== starRating) {
      return false;
    }
    if (
      amenities.length &&
      !amenities.every((amenity) => hotel.amenities?.includes(amenity))
    ) {
      return false;
    }
    return true;
  });
};

function SearchResult({ searchParams }: Props) {
  const { data: hotels, isLoading } = useSearch(searchParams);
  const setPriceRange = useSearchStore((state) => state.setPriceRange);
  const starRating = useSearchStore((state) => state.starRating);
  const amenities = useSearchStore((state) => state.amenities);

  if (hotels?.length !== 0) {
    const lowestPriceHotel = hotels?.reduce((prev, curr) =>
      prev?.roomPrice < curr?.roomPrice ? prev : curr
    );

    const highestPriceHotel = hotels?.reduce((prev, curr) =>
      prev?.roomPrice > curr?.roomPrice ? prev : curr
    );

    setPriceRange([
      lowestPriceHotel?.roomPrice || 0,
      highestPriceHotel?.roomPrice || 0,
    ]);
  }

  return (
    <Stack gap={2}>
      {isLoading
        ? Array.from({ length: 5 }, () => (
            <HotelCardSkeleton variant="horizontal" />
          ))
        : filterHotels(hotels || [], starRating, amenities)?.map((hotel) => (
            <Hotel key={hotel.id} hotel={hotel} variant="horizontal" />
          ))}
    </Stack>
  );
}

export default SearchResult;
