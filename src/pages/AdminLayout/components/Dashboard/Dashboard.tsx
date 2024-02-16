import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { DrawerHeader } from "../../styles";
import AppBar from "../AppBar";
import Drawer from "../Drawer";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer open={open} handleDrawerClose={handleDrawerClose} />
      <Container maxWidth="lg" component="main">
        <DrawerHeader />
        <Box my={2}>{children}</Box>
      </Container>
    </Box>
  );
}
