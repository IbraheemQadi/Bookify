import Table from "@/components/Table";
import usePagination from "@/hooks/usePagination";
import { useAdminDrawer } from "@/pages/AdminLayout/context/AdminDrawerContext";
import { Box } from "@mui/material";
import { memo } from "react";
import useCities from "../../hooks/useCities";
import { sortCities } from "../../utils/cityUtils";

interface Props {
  searchQuery: string;
}

const CitiesTable = memo(({ searchQuery }: Props) => {
  const {
    currentPage,
    rowsPerPage,
    handlePageChange,
    handleRowsPerPageChange,
  } = usePagination(5);

  const { data, isLoading } = useCities({
    pageNumber: currentPage + 1,
    pageSize: rowsPerPage,
    name: searchQuery,
  });
  const { openDrawer } = useAdminDrawer();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Box>
      <Table
        data={sortCities(data ?? [])}
        headers={["Id", "Name", "Description"]}
        onRowClick={(row) => openDrawer(row)}
        page={currentPage}
        rowsPerPage={rowsPerPage}
        setpage={handlePageChange}
        setRowsPerPage={handleRowsPerPageChange}
      />
    </Box>
  );
});

export default CitiesTable;
