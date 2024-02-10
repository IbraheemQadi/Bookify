import * as yup from "yup";

const validationSchema = yup.object({
  cardNumber: yup
    .string()
    .matches(
      /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/,
      "Card number is not valid. It should be a 16 digits number with spaces after every 4 digits."
    )
    .required("Card number is required"),
  expirationDate: yup.date().required("Expiration date is required"),
  cvv: yup.number().min(3).required("CVV is required"),
  streetAddress: yup.string().required("Street address is required"),
  aptOrSuiteNumber: yup.string().required("Apt or suite number is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zipCode: yup.string().required("Zip code is required"),
});

export default validationSchema;
