import FormikTextField from "@/components/FormikTextField";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Form, Formik, FormikProps } from "formik";
import {
  bindMenu,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
import queryString from "query-string";
import { useNavigate } from "react-router-dom";
import Controls from "../Controls";
import { StyledDatePicker, StyledMenuItem, StyledStack } from "./styles";
import validationSchema from "./validationSchema";

const Search = () => {
  const popupState = usePopupState({ variant: "popover", popupId: "controls" });
  const navigate = useNavigate();

  const initialValues = {
    cityName: "",
    checkIn: dayjs(),
    checkOut: dayjs().add(1, "day"),
    adults: 2,
    children: 0,
    rooms: 1,
  };

  const handleSubmit = (values: typeof initialValues) => {
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
  };

  const handleDateChange =
    (name: string, formik: FormikProps<typeof initialValues>) =>
    (date: unknown) => {
      formik.setFieldValue(name, date);
    };

  const hanldeCountChange =
    (formik: FormikProps<typeof initialValues>) =>
    (name: string, count: number) => {
      formik.setFieldValue(name, count);
    };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
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
                <FormikTextField
                  name="cityName"
                  label=""
                  placeholder="Where are you going?"
                  variant="standard"
                  fullWidth
                  sx={{ mr: 3 }}
                />
              </StyledStack>
              <StyledStack flexGrow={1} sx={{ padding: "5px" }}>
                <StyledDatePicker
                  name="checkIn"
                  value={formik.values.checkIn}
                  onChange={handleDateChange("checkIn", formik)}
                  minDate={dayjs()}
                />
                <HorizontalRuleIcon />
                <StyledDatePicker
                  name="checkOut"
                  value={formik.values.checkOut}
                  onChange={handleDateChange("checkOut", formik)}
                  minDate={formik.values.checkIn.add(1, "day")}
                />
              </StyledStack>
              <StyledStack>
                <Button disableRipple fullWidth {...bindTrigger(popupState)}>
                  {formik.values.adults} Adults - {formik.values.children}{" "}
                  Children - {formik.values.rooms} Rooms
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
                      disabled={formik.values.adults === 1}
                      handleChange={hanldeCountChange(formik)}
                    />
                  </StyledMenuItem>
                  <StyledMenuItem>
                    <Controls
                      title="Children"
                      count={formik.values.children}
                      disabled={formik.values.children === 0}
                      handleChange={hanldeCountChange(formik)}
                    />
                  </StyledMenuItem>
                  <StyledMenuItem>
                    <Controls
                      title="Rooms"
                      count={formik.values.rooms}
                      disabled={formik.values.rooms === 1}
                      handleChange={hanldeCountChange(formik)}
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
          </Form>
        )}
      </Formik>
    </LocalizationProvider>
  );
};

export default Search;
