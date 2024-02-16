import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { StyledAppBar } from "../../styles";

interface Props {
  open: boolean;
  handleDrawerOpen?: () => void;
  handleDrawerClose?: () => void;
}

const AppBar = ({ open, handleDrawerOpen }: Props) => {
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

export default AppBar;
