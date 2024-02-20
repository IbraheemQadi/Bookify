import { Hotel } from "@/entities/Hotel";

const getFilteredHotels = (
  hotels: Hotel[],
  starRating: number,
  _: string[],
  priceRange: [number, number]
) => {
  return hotels?.filter((hotel) => {
    if (starRating && hotel.starRating !== starRating) {
      return false;
    }
    if (hotel.roomPrice === undefined) return false;
    if (hotel.roomPrice < priceRange[0] || hotel.roomPrice > priceRange[1]) {
      return false;
    }
    // if (
    //   amenities.length &&
    //   !amenities.every((amenity) => hotel.amenities?.includes(amenity))
    // ) {
    //   return false;
    // }
    return true;
  });
};

export default getFilteredHotels;
