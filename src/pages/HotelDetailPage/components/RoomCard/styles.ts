import { Chip, styled } from "@mui/material";

export const StyledChip = styled(Chip)(() => ({
  position: "absolute",
  bottom: 10,
  left: 10,
  borderColor: "white",
  backgroundColor: "#fff",
  fontWeight: "bold",
  fontSize: "1.2rem",
  padding: "5px",
}));
