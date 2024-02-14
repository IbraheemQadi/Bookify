import { Button, Typography } from "@mui/material";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import { StyledBox } from "./styles";

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
