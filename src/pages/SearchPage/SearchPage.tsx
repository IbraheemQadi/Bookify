import { Box, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";
import SearchFilters from "../../component/SearchFilters";
import SearchResult from "../../component/SearchResult";
import SortBy from "../../component/common/SortBy";
import useSearchStore from "../../store/search.store";

const sortOptions = [
  { label: "Room Price (lowest fisrt)", value: "RoomPrice" },
  { label: "Star Rating (low to high)", value: "StarRating" },
  { label: "Room Price (highest fisrt)", value: "-RoomPrice" },
  { label: "Star Rating (high to low)", value: "-StarRating" },
];

function SearchPage() {
  const { search: searchParams } = useLocation();
  const reset = useSearchStore((state) => state.reset);
  reset();

  return (
    <Box>
      <Stack direction="row-reverse" mb={1}>
        <SortBy options={sortOptions} />
      </Stack>
      <Stack direction="row" gap={2} alignItems="start">
        <Box position="sticky" top={25}>
          <SearchFilters />
        </Box>
        <Box flexGrow={1}>
          <SearchResult searchParams={searchParams} />
        </Box>
      </Stack>
    </Box>
  );
}
export default SearchPage;
