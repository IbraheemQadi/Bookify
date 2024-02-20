import useUserSearchStore from "@/pages/SearchPage/store/userSearch.store";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import SearchFilters from "./components/SearchFilters";
import SearchResult from "./components/SearchResult";
import SortBy from "./components/SortBy";
import { sortOptions } from "./data/sortOptions";

function SearchPage() {
  const { search: searchParams } = useLocation();
  const reset = useUserSearchStore((state) => state.reset);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  reset();

  return (
    <Stack>
      <Stack direction="row-reverse" mb={1}>
        <SortBy options={sortOptions} />
      </Stack>
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
