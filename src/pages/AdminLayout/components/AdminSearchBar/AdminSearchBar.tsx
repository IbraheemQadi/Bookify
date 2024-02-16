import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useAdminDrawer } from "../../context/AdminDrawerContext";

interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const AdminSearchBar = ({ searchValue, setSearchValue }: Props) => {
  const { openDrawerForCreate } = useAdminDrawer();

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
            value={searchValue}
            fullWidth
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button
            onClick={() => openDrawerForCreate()}
            variant="contained"
            color="primary"
          >
            Create
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default AdminSearchBar;
