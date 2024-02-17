import Table from "@/components/Table";
import { useAdminDrawer } from "@/pages/AdminLayout/context/AdminDrawerContext";
import { sortCities } from "@/utils/cityUtils";
import { Box } from "@mui/material";
import { memo, useState } from "react";
import useCities from "../../hooks/useCities";

interface Props {
  searchQuery: string;
}

const CitiesTable = memo(({ searchQuery }: Props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { data, isLoading } = useCities({
    pageNumber: page + 1,
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
        page={page}
        rowsPerPage={rowsPerPage}
        setpage={setPage}
        setRowsPerPage={setRowsPerPage}
      />
    </Box>
  );
});

export default CitiesTable;
