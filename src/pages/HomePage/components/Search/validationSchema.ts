import * as yup from "yup";

const validationSchema = yup.object({
  checkIn: yup.date().required("Check-in date is required"),
  checkOut: yup.date().required("Check-out date is required"),
  adults: yup.number().min(1).required("Adults is required"),
  children: yup.number().min(0).required("Children is required"),
  rooms: yup.number().min(1).required("Rooms is required"),
});

export default validationSchema;
