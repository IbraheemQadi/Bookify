import AdminSearchBar from "@/component/AdminSearchBar";
import CitiesTable from "@/component/CitiesTable";
import useDebounce from "@/hooks/useDebounce";
import { useState } from "react";

export default function CitiesDashboard() {
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearchValue = useDebounce(searchInput, 600);

  return (
    <>
      <AdminSearchBar
        searchValue={searchInput}
        setSearchValue={setSearchInput}
      />
      <CitiesTable searchQuery={debouncedSearchValue} />
    </>
  );
}
