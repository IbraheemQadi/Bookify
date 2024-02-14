import { TextField } from "@mui/material";
import { Field, FieldProps } from "formik";

interface Props extends React.ComponentProps<typeof TextField> {
  name: string;
  label: string;
  type: string;
}

const FormikTextField = ({ name, label, type, ...props }: Props) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        const errorText = meta.error && meta.touched ? meta.error : "";
        return (
          <TextField
            type={type}
            label={label}
            error={!!errorText}
            helperText={errorText}
            {...field}
            {...props}
          />
        );
      }}
    </Field>
  );
};

export default FormikTextField;
