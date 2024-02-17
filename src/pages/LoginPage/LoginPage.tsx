import FormikTextField from "@/components/FormikTextField";
import useAuthStore from "@/store/auth.store";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import { StyledBox } from "./styles";
import validationSchema from "./validationSchema";

const LoginPage = () => {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  const auth = useAuth();
  const theme = useTheme();

  const initialValues = {
    username: "",
    password: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    const { username, password } = values;
    auth.mutate({ username, password });
  };

  useEffect(() => {
    user?.userType === "Admin"
      ? navigate("/admin")
      : user?.userType === "User" && navigate("/user");
  }, [user?.userType, navigate]);

  return (
    <StyledBox>
      <Container
        sx={{
          backgroundColor: theme.palette.background.default,
          borderRadius: "10px",
          marginInline: "10px",
        }}
        component="main"
        maxWidth="xs"
      >
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h3">
            Login 🔒
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <FormikTextField
                margin="normal"
                fullWidth
                name="username"
                label="Username"
                autoFocus
              />
              <FormikTextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
              />
              <Typography variant="body2" color="error" align="left">
                {auth.error &&
                  "The username or password provided were incorrect!"}
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={auth.isPending}
                sx={{ mt: 3, mb: 2, textTransform: "none" }}
              >
                {auth.isPending ? "Loading..." : "Login"}
              </Button>
            </Form>
          </Formik>
        </Box>
      </Container>
    </StyledBox>
  );
};

export default LoginPage;
