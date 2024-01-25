import AppBar from "@/component/AppBar";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import { Container } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <AppBar />
      {pathname === "/" && <Hero />}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
