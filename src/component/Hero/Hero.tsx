import { Box, Typography, styled } from "@mui/material";
import hero from "../../assets/hero.jpg";

const styles = {
  hero: {
    position: "relative",
    width: "100%",
    height: "calc(100vh - 68.5px - 30px)",
    paddingInline: "30px",
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
  return (
    <Box sx={styles.hero}>
      <StyledImage src={hero} alt="Hero Image" />
      <Box sx={styles.heroText}>
        <Typography fontWeight="bold" variant="h2">
          Stay once,
        </Typography>
        <Typography fontWeight="bold" variant="h2">
          Carry memories forever.
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
