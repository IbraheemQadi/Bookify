import SortIcon from "@mui/icons-material/Sort";
import {
  FormControl,
  Input,
  InputAdornment,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

type Props = {
  options: string[];
  selectedSortBy: string;
  onSortByChange: (sortBy: string) => void;
};

const SortBy = ({ options, selectedSortBy, onSortByChange }: Props) => {
  const handleSortByChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onSortByChange(event.target.value as string);
  };

  return (
    <FormControl>
      <Select
        name="sort-by"
        value={selectedSortBy}
        onChange={handleSortByChange}
        disableUnderline
        input={
          <Input
            startAdornment={
              <InputAdornment position="start">
                <SortIcon />
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
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortBy;
