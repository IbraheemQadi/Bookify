import { useAdminDrawer } from "@/context/AdminDrawerContext";
import { City } from "@/entities/City";
import useCities from "@/hooks/useCities";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Table from "../common/Table";

const sortCities = (cities: City[]) => {
  return [...cities].sort((a, b) => (a.id > b.id ? 1 : -1));
};

// const filterCities = (cities: City[], search: string) => {
//   if (!search) return cities;
//   return cities.filter((city) => {
//     return city.name.toLowerCase().includes(search.toLowerCase());
//   });
// };

function CitiesTable() {
  const { data, isLoading } = useCities({ pageSize: 10, pageNumber: 1 });
  const { openDrawerForCreate, openDrawer } = useAdminDrawer();

  // let filteredCities = [];

  const handleCityCreate = () => {
    openDrawerForCreate();
  };

  const handleSearch = () => {
    // const { value } = e.target;
    // filteredCities = filterCities(data ?? [], value);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Cities Table
      </Typography>
      <Paper sx={{ my: 2 }}>
        <Stack direction="row" gap={1}>
          <TextField
            name="search"
            label="Search"
            variant="outlined"
            fullWidth
            onChange={handleSearch}
          />
          <Button
            onClick={handleCityCreate}
            variant="contained"
            color="primary"
          >
            Create
          </Button>
        </Stack>
      </Paper>
      <Table
        data={sortCities(data ?? [])}
        headers={["Id", "Name", "Description"]}
        onRowClick={(row) => openDrawer(row)}
      />
    </Box>
  );
}

export default CitiesTable;
