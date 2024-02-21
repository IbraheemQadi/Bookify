import { Hotel } from "@/entities/Hotel";
import HotelCardHorizontal from "./variants/HotelCardHorizontal";
import HotelCardVertical from "./variants/HotelCardVertical";

interface Prop {
  hotel: Hotel;
  variant: "horizontal" | "vertical";
}

const HotelCard = ({ hotel, variant }: Prop) => {
  return variant === "horizontal" ? (
    <HotelCardHorizontal hotel={hotel} />
  ) : (
    <HotelCardVertical hotel={hotel} />
  );
};

export default HotelCard;
