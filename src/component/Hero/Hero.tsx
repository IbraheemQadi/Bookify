import hero from "@/assets/hero.jpg";
import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const heroPadding = "30px";

const styles = {
  hero: {
    position: "relative",
    width: "100%",
    height: "calc(100vh - 68.5px - 30px)", // 68.5px is the height of AppBar
    paddingInline: heroPadding,
    overflow: "hidden",
  },
  heroText: {
    position: "absolute",
    top: "35%",
    left: "5%",
    textAlign: "start",
    color: "#fff",
    textWrap: "nowrap",
  },
};

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "5px",
  filter: "blur(.5px) brightness(90%)",
});

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
