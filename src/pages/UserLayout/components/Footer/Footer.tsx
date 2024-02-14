import { Typography, Link, Box, useTheme } from "@mui/material";

const styles = {
  footer: {
    padding: "48px",
  },
};

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...styles.footer,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography variant="body2" color="textSecondary" align="center">
        {"Made with ❤️ by "}
        <Link color="inherit" href="https://github.com/ibraheemqadi">
          Ibraheem Qadi
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
