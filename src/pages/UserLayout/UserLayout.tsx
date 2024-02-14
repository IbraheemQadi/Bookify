import useWelcomeToast from "@/hooks/useWelcomeToast";
import { Container } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function UserLayout() {
  const { pathname } = useLocation();
  useWelcomeToast();

  return (
    <>
      <AppBar />
      {pathname === "/user" && <Hero />}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default UserLayout;
