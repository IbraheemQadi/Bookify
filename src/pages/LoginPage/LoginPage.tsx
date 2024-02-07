import useAuth from "@/hooks/useAuth";
import useAuthStore from "@/store/auth.store";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const StyledBox = styled(Box)({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: "url('login-small.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(4, "Password should be of minimum 4 characters length")
    .required("Password is required"),
});

const LoginPage = () => {
  const user = useAuthStore((state) => state.user);
  const auth = useAuth();
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { username, password } = values;
      auth.mutate({ username, password });
    },
  });
  const navigate = useNavigate();

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
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              type="text"
              label="Username"
              autoFocus
              autoComplete="username"
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              {...formik.getFieldProps("username")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              type="password"
              label="Password"
              autoComplete="current-password"
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              {...formik.getFieldProps("password")}
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
          </Box>
        </Box>
      </Container>
    </StyledBox>
  );
};

export default LoginPage;
