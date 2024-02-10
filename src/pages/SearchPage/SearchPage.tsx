import SearchFilters from "@/component/SearchFilters";
import SearchResult from "@/component/SearchResult";
import SortBy from "@/component/common/SortBy";
import useUserSearchStore from "@/store/userSearch.store";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";

const sortOptions = [
  { label: "Room Price (lowest fisrt)", value: "RoomPrice" },
  { label: "Star Rating (low to high)", value: "StarRating" },
  { label: "Room Price (highest fisrt)", value: "-RoomPrice" },
  { label: "Star Rating (high to low)", value: "-StarRating" },
];

function SearchPage() {
  const { search: searchParams } = useLocation();
  const reset = useUserSearchStore((state) => state.reset);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  reset();
  // position="sticky" top={25} ( search filters ) for Desktop view
  return (
    <Stack>
      <Stack direction="row-reverse" mb={1}>
        <SortBy options={sortOptions} />
      </Stack>
      {/* alignItems="start" */}
      <Stack direction={isMobile ? "column" : "row"} gap={2}>
        <Box
          position={isMobile ? "static" : "sticky"}
          width={isMobile ? "80%" : "fit-content"}
          top={80}
        >
          <SearchFilters />
        </Box>
        <Box flexGrow={1}>
          <SearchResult searchParams={searchParams} />
        </Box>
      </Stack>
    </Stack>
  );
}
export default SearchPage;
