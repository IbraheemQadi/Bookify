import { Typography, Link, Box } from "@mui/material";

const styles = {
  footer: {
    backgroundColor: "#f4f4f4",
    padding: "48px",
    // marginTop: "auto",
  },
};

const Footer = () => {
  return (
    <Box sx={styles.footer}>
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
