import { Box, Button, Typography, styled } from "@mui/material";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 15,
  height: "100vh",
});

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <StyledBox>
      <Typography variant="h4" color="textSecondary">
        {isRouteErrorResponse(error)
          ? "Oops! Page not found."
          : "An error occuer"}
      </Typography>
      <Typography variant="body1">
        {isRouteErrorResponse(error) &&
          "We couldn't find the page you were looking for."}
      </Typography>
      <Button variant="outlined" color="primary" onClick={handleGoBack}>
        Go Home
      </Button>
    </StyledBox>
  );
}

export default ErrorPage;
