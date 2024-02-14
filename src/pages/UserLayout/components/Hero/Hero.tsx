import hero from "@/assets/hero.jpg";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { StyledImage, styles } from "./styles";

const Hero = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ ...styles.hero }}>
      <StyledImage src={hero} alt="Hero Image" />
      <Box sx={styles.heroText}>
        <Typography fontWeight="bold" variant={isSmallScreen ? "h3" : "h2"}>
          Stay once,
        </Typography>
        <Typography fontWeight="bold" variant={isSmallScreen ? "h3" : "h2"}>
          Carry memories forever.
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
