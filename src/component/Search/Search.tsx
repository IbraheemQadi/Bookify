import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import { Stack, TextField, styled } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useFormik } from "formik";
import {
  bindMenu,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
import queryString from "query-string";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Controls from "../common/Controls";

const StyledStack = styled(Stack)({
  backgroundColor: "#fff",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  borderRadius: "5px",
});

const StyledDatePicker = styled(DatePicker)({
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

const StyledMenuItem = styled(MenuItem)({
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

const Search = () => {
  const popupState = usePopupState({ variant: "popover", popupId: "controls" });
  const navigate = useNavigate();

  const validationSchema = yup.object({
    checkIn: yup.date().required("Check-in date is required"),
    checkOut: yup.date().required("Check-out date is required"),
    adults: yup.number().required("Adults is required"),
    children: yup.number().required("Children is required"),
    rooms: yup.number().required("Rooms is required"),
  });

  const formik = useFormik({
    initialValues: {
      cityName: "",
      checkIn: dayjs(),
      checkOut: dayjs().add(1, "day"),
      adults: 2,
      children: 0,
      rooms: 1,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { cityName, checkIn, checkOut, adults, children, rooms } = values;
      const checkInDate = checkIn.format("YYYY-MM-DD");
      const checkOutDate = checkOut.format("YYYY-MM-DD");

      const queryParams = queryString.stringify({
        city: cityName,
        checkInDate,
        checkOutDate,
        adults,
        children,
        numberOfRooms: rooms,
      });

      navigate(`/user/search?${queryParams}`);
    },
  });

  const handleDateChange = (name: string) => (date) => {
    formik.setFieldValue(name, date);
  };

  const hanldeCountChange = (name: string, count: number) => {
    formik.setFieldValue(name, count);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={formik.handleSubmit}>
        <Stack
          p="5px"
          direction={{ xs: "column", md: "row" }}
          spacing={"5px"}
          alignContent={"center"}
          justifyContent={"space-between"}
          sx={{ backgroundColor: "#ffb700", borderRadius: "5px" }}
        >
          <StyledStack flexGrow={2} sx={{ justifyContent: "start", pl: 2 }}>
            <SingleBedIcon
              fontSize="large"
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              id="cityName"
              placeholder="Where are you going?"
              variant="standard"
              fullWidth
              sx={{ mr: 3 }}
              value={formik.values.cityName}
              onChange={formik.handleChange}
            />
          </StyledStack>
          <StyledStack flexGrow={1} sx={{ padding: "5px" }}>
            <StyledDatePicker
              name="checkIn"
              value={formik.values.checkIn}
              onChange={handleDateChange("checkIn")}
              minDate={dayjs()}
            />
            <HorizontalRuleIcon />
            <StyledDatePicker
              name="checkOut"
              value={formik.values.checkOut}
              onChange={handleDateChange("checkOut")}
              minDate={formik.values.checkIn.add(1, "day")}
            />
          </StyledStack>
          <StyledStack>
            <Button disableRipple fullWidth {...bindTrigger(popupState)}>
              {formik.values.adults} Adults - {formik.values.children} Children
              - {formik.values.rooms} Rooms
            </Button>
            <Menu
              {...bindMenu(popupState)}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <StyledMenuItem>
                <Controls
                  title="Adults"
                  count={formik.values.adults}
                  handleChange={hanldeCountChange}
                />
              </StyledMenuItem>
              <StyledMenuItem>
                <Controls
                  title="Children"
                  count={formik.values.children}
                  handleChange={hanldeCountChange}
                />
              </StyledMenuItem>
              <StyledMenuItem>
                <Controls
                  title="Rooms"
                  count={formik.values.rooms}
                  handleChange={hanldeCountChange}
                />
              </StyledMenuItem>
              <StyledMenuItem>
                <Button
                  onClick={popupState.close}
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 2 }}
                >
                  Done
                </Button>
              </StyledMenuItem>
            </Menu>
          </StyledStack>
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Search
          </Button>
        </Stack>
      </form>
    </LocalizationProvider>
  );
};

export default Search;
