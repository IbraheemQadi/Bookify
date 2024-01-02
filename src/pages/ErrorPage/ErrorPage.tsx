import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <h1>
      {isRouteErrorResponse(error)
        ? "This page does not exist "
        : "AN error ocuer"}
    </h1>
  );
}

export default ErrorPage;
