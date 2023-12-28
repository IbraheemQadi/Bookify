export interface Hotel {
  id: number;
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
