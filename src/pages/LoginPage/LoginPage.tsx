import useAuth from "@/hooks/useAuth";
import useAuthStore from "@/store/auth.store";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

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
      : user?.userType === "User" && navigate("/");
  }, [user?.userType, navigate]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
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
            {auth.error && "The username or password provided were incorrect!"}
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={auth.isPending}
            sx={{ mt: 3, mb: 2 }}
          >
            {auth.isPending ? "Loading..." : "Sign In"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
