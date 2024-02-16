import FormikTextField from "@/component/common/FormikTextField";
import { City } from "@/entities/City";
import { useAdminDrawer } from "@/pages/AdminLayout/context/AdminDrawerContext";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import useCreateCity from "../../hooks/useCreateCity";
import useDeleteCity from "../../hooks/useDeleteCity";
import useUpdateCity from "../../hooks/useUpdateCity";
import validationSchema from "./validationSchema";

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

  const initialValues: FormValues = {
    name: city?.name || "",
    description: city?.description || "",
  };

  const handleSubmit = (values: FormValues) => {
    isOpenForCreate
      ? createCity.mutate(values as City)
      : updateCity.mutate({ id: city?.id, ...values });
  };

  const handleDelete = () => {
    deleteCity.mutate({ id: city?.id } as City);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Box p={2} width={300}>
          <Typography variant="h5" gutterBottom>
            Edit or Delete City
          </Typography>
          <Divider />
          <Stack gap={3} my={3}>
            <FormikTextField name="name" label="Name" fullWidth />
            <FormikTextField
              name="description"
              label="Description"
              fullWidth
              multiline
              rows={10}
            />
          </Stack>
          {isOpen &&
            (isOpenForCreate ? (
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
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
      </Form>
    </Formik>
  );
};

export default CityControlForm;
