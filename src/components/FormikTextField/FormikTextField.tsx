import { TextField } from "@mui/material";
import { Field, FieldProps } from "formik";

interface Props extends React.ComponentProps<typeof TextField> {
  name: string;
  label: string;
}

const FormikTextField = ({ name, label, ...props }: Props) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        const errorText = meta.error && meta.touched ? meta.error : "";
        return (
          <TextField
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
