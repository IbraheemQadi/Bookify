import { useAdminDrawer } from "@/context/AdminDrawerContext";
import { City } from "@/entities/City";
import useCreateCity from "@/hooks/useCreateCity";
import useDeleteCity from "@/hooks/useDeleteCity";
import useUpdateCity from "@/hooks/useUpdateCity";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

interface FormValues {
  name: string;
  description: string;
}

const CityControlForm = () => {
  const { selectedRow, isOpenForCreate, isOpen } = useAdminDrawer();
  const city = selectedRow as City;

  const createCity = useCreateCity();
  const updateCity = useUpdateCity(city?.id);
  const deleteCity = useDeleteCity(city?.id);

  const formik = useFormik({
    initialValues: {
      name: city?.name || "",
      description: city?.description || "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Name is required"),
      description: yup.string().required("Description is required"),
    }),
    onSubmit: (values: FormValues) => {
      isOpenForCreate
        ? createCity.mutate(values as City)
        : updateCity.mutate({ id: city?.id, ...values });
    },
  });

  const handleDelete = () => {
    deleteCity.mutate({ id: city?.id } as City);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box p={2} width={300}>
        <Typography variant="h5" gutterBottom>
          Edit or Delete City
        </Typography>
        <Divider />
        <Stack gap={3} my={3}>
          <TextField
            label="Name"
            fullWidth
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            {...formik.getFieldProps("name")}
          />
          <TextField
            label="Description"
            fullWidth
            multiline
            rows={10}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
            {...formik.getFieldProps("description")}
          />
        </Stack>
        {isOpen &&
          (isOpenForCreate ? (
            <Button variant="contained" color="primary" type="submit" fullWidth>
              {createCity.isPending ? "Creating..." : "Create"}
            </Button>
          ) : (
            <Stack direction="row" gap={1}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleDelete}
                color="error"
              >
                {deleteCity.isPending ? "Deleting..." : "Delete"}
              </Button>
              <Button fullWidth variant="contained" type="submit">
                {updateCity.isPending ? "Updating..." : "Update"}
              </Button>
            </Stack>
          ))}
      </Box>
    </form>
  );
};

export default CityControlForm;
