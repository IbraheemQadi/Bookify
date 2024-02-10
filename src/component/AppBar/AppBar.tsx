import useAuthStore from "@/store/auth.store";
import useBookingStore from "@/store/booking.store";
import AdbIcon from "@mui/icons-material/Adb";
import DoorbellOutlinedIcon from "@mui/icons-material/DoorbellOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar as MuiAppBar, styled, useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";

const pages = [
  { label: "Home", path: "/user" },
  { label: "Checkout", path: "/user/checkout" },
];
const settings = ["Profile", "Account", "Logout"];

const StyledLink = styled(Link)({
  color: "inherit",
  textDecoration: "none",
  padding: "6px 8px",
  position: "relative",
});

const styles = {
  appbar: {
    color: "black",
    boxShadow: "none",
  },
};

function AppBar() {
  const signout = useAuthStore((state) => state.signout);
  const location = useLocation();
  const isReserved = useBookingStore((state) => state.isReserved);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const theme = useTheme();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting?: string) => () => {
    setAnchorElUser(null);
    if (setting === "Logout") {
      signout();
    }
  };

  return (
    <MuiAppBar
      sx={{
        ...styles.appbar,
        backgroundColor: theme.palette.background.default,
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="span"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <StyledLink to="/user">Bookify</StyledLink>
          </Typography>

          {/* Mobile Navigation Menu  */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.path}
                  onClick={handleCloseNavMenu}
                  disabled={!isReserved && page.path === "/user/checkout"}
                >
                  <Typography textAlign="center">
                    <StyledLink to={`${page.path.toLowerCase()}`}>
                      {page.label}
                    </StyledLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* User Logo */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <StyledLink to="/user">Bookify</StyledLink>
          </Typography>

          {/* Desktop Navigation menu */}
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            gap={2}
          >
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  color: "inhert",
                  display: "block",
                  p: 0,
                }}
                disabled={
                  (!isReserved || location.pathname === "/user/confirmation") &&
                  page.path === "/user/checkout"
                }
              >
                <StyledLink to={`${page.path.toLowerCase()}`}>
                  {page.label}
                  {page.path === "/user/checkout" && isReserved && (
                    <DoorbellOutlinedIcon
                      sx={{ position: "absolute", top: 0 }}
                    />
                  )}
                </StyledLink>
              </Button>
            ))}
          </Box>

          {/* User Menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="M Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu()}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}
export default AppBar;
