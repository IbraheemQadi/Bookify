import { Stack } from "@mui/material";
import { Hotel as HotelType } from "../../entities/Hotel";
import Hotel from "../HotelCard";

interface Props {
  hotels: HotelType[];
}

function SearchResult({ hotels }: Props) {
  return (
    <Stack gap={2}>
      {hotels.map((hotel) => (
        <Hotel key={hotel.id} hotel={hotel} variant="horizontal" />
      ))}
    </Stack>
  );
}

export default SearchResult;
