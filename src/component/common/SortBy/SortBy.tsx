import SortIcon from "@mui/icons-material/Sort";
import {
  FormControl,
  Input,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import useUserSearchStore from "@/store/userSearch.store";

interface Option {
  label: string;
  value: string;
}

type Props = {
  options: Option[];
};

const SortBy = ({ options }: Props) => {
  const { setSort } = useUserSearchStore();

  const handleSortByChange = (event: SelectChangeEvent<{ value: string }>) => {
    setSort(event.target.value as string);
  };

  return (
    <FormControl>
      <Select
        name="sort-by"
        onChange={handleSortByChange}
        disableUnderline
        input={
          <Input
            startAdornment={
              <InputAdornment position="start">
                <SortIcon />
                <Typography sx={{ ml: 1 }}>Sort by</Typography>
              </InputAdornment>
            }
            sx={{
              border: "2px solid #0000001f",
              padding: 1,
              borderRadius: "5px",
            }}
          />
        }
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortBy;
