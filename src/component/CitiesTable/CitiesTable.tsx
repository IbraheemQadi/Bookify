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

function CitiesTable() {
  const { data, isLoading } = useCities(10, 1);
  const { openForCreate, openDrawer } = useAdminDrawer();

  const handleCityCreate = () => {
    openForCreate();
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <Box my={2}>
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
            onChange={(e) => console.log(e.target.value)}
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
        data={sortCities(data || [])}
        headers={["Id", "Name", "Description"]}
        onRowClick={(row) => openDrawer(row)}
      />
    </Box>
  );
}

export default CitiesTable;
