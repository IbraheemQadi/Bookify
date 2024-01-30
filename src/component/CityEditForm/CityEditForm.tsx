import { useAdminDrawer } from "@/context/AdminDrawerContext";
import { City } from "@/entities/City";
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
import { Field, Form, Formik } from "formik";

interface FormValues {
  name: string;
  description: string;
}

const CityEditForm = () => {
  const { selectedRow } = useAdminDrawer();

  const updateCity = useUpdateCity((selectedRow as City)?.id);
  const deleteCity = useDeleteCity((selectedRow as City)?.id);

  const initialValues: FormValues = {
    name: (selectedRow as City)?.name || "",
    description: (selectedRow as City)?.description || "",
  };

  const handleUpdate = (values: FormValues) => {
    updateCity.mutate({ id: (selectedRow as City)?.id, ...values });
  };

  const handleDelete = () => {
    deleteCity.mutate({ id: (selectedRow as City)?.id } as City);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleUpdate}>
      {() => (
        <Form>
          <Box p={2} width={300}>
            <Typography variant="h5" gutterBottom>
              Edit or Delete City
            </Typography>
            <Divider />
            <Stack gap={3} my={3}>
              <Field as={TextField} name="name" label="Name" fullWidth />
              <Field
                as={TextField}
                name="description"
                label="Description"
                fullWidth
                multiline
                rows={10}
              />
            </Stack>
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
            {updateCity.isError && (
              <Typography variant="body2" color="error" mt={1}>
                Error updating city
              </Typography>
            )}
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default CityEditForm;
