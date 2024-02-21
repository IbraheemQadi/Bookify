import { Chip, styled } from "@mui/material";

export const StyledChip = styled(Chip)(() => ({
  position: "absolute",
  bottom: 10,
  right: 10,
  borderColor: "white",
  backgroundColor: "#fff",
  fontSize: "1.2rem",
  padding: "20px 5px",
  fontWeight: "normal",
}));

export const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "top",
});
