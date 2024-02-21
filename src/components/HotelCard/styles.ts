import { Paper, styled } from "@mui/material";

export const StyledImg = styled("img")({
  objectFit: "cover",
  borderRadius: "5px",
  width: "100%",
  height: "100%",
});

export const StyledPaper = styled(Paper)({
  display: "flex",
  flexDirection: "row",
  gap: 15,
  padding: "10px",
});
