export default interface Hotel {
  cityName: string;
  countryName?: string;
  description?: string;
  discount?: number;
  discountPercentage?: number;
  finalPrice?: number;
  hotelName: string;
  originalRoomPrice: number;
  starRating?: number;
  thumbnailUrl: string;
  visitDate?: string;
}
