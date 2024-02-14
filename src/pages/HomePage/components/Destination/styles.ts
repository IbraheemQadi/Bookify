import { Typography, styled } from "@mui/material";

export const StyledCard = styled("div")({
  overflow: "hidden",
  position: "relative",
  width: "100%",
  height: "100%",
});

export const StyledCardMedia = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "top",
  borderRadius: "5px",
});

export const CityName = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(3),
  left: theme.spacing(2),
  color: theme.palette.common.white,
  textShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)",
  fontWeight: "bold",
}));
