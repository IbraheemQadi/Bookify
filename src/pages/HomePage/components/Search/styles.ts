import { Stack, styled } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker } from "@mui/x-date-pickers";

export const StyledStack = styled(Stack)({
  backgroundColor: "#fff",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  borderRadius: "5px",
});

export const StyledDatePicker = styled(DatePicker)({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
    padding: "0px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiInputBase-input": {
    padding: "5px",
    width: "45%",
  },
  "& .MuiInputBase-root": {
    justifyContent: "center",
  },
});

export const StyledMenuItem = styled(MenuItem)({
  "&.MuiMenuItem-root": {
    justifyContent: "space-between",
  },
  "&.MuiMenuItem-root:hover": {
    backgroundColor: "transparent",
    cursor: "default",
  },
});

StyledMenuItem.defaultProps = {
  disableRipple: true,
};
