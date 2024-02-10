import useAuthStore from "@/store/auth.store";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HotelIcon from "@mui/icons-material/Hotel";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LogoutIcon from "@mui/icons-material/Logout";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import { DrawerHeader, StyledAppBar, StyledDrawer, StyledLink } from "./styles";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

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

interface AppBarProps {
  open: boolean;
  handleDrawerOpen?: () => void;
  handleDrawerClose?: () => void;
}

const AppBar = ({ open, handleDrawerOpen }: AppBarProps) => {
  return (
    <StyledAppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Booking System Dashboard
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

const Drawer = ({ open, handleDrawerClose }: AppBarProps) => {
  const signout = useAuthStore((state) => state.signout);

  const theme = useTheme();
  return (
    <StyledDrawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {links.map((link) => (
          <ListItem key={link.title} disablePadding sx={{ display: "block" }}>
            <StyledLink to={link.path}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {link.icon}
                </ListItemIcon>
                <ListItemText
                  primary={link.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </StyledLink>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => {
              signout();
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </StyledDrawer>
  );
};

const links = [
  {
    title: "Cities",
    icon: <LocationCityIcon />,
    path: "/admin",
  },
  {
    title: "Hotels",
    icon: <HotelIcon />,
    path: "/admin/hotels",
  },
  {
    title: "Rooms",
    icon: <MeetingRoomIcon />,
    path: "/admin/rooms",
  },
];
