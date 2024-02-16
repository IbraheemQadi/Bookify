import useDebounce from "@/hooks/useDebounce";
import AdminSearchBar from "@/pages/AdminLayout/components/AdminSearchBar";
import { useState } from "react";
import CitiesTable from "./components/CitiesTable";

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
