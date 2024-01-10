import { Amenity } from "./Amenity";

export interface Hotel {
  id: number;
  hotelId?: number;
  cityName: string;
  countryName?: string;
  description?: string;
  discount?: number;
  discountPercentage?: number;
  finalPrice?: number;
  hotelName: string;
  originalRoomPrice: number;
  starRating?: number;
  thumbnailUrl?: string;
  roomPhotoUrl?: string;
  visitDate?: string;
  location?: string;
  amenities?: Amenity[];
  roomPrice?: number;
}
