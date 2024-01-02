import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Container>
      <h1>Layout Page</h1>
      <Outlet />
    </Container>
  );
}

export default Layout;
