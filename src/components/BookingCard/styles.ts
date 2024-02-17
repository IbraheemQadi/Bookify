import { Paper, styled } from "@mui/material";

export const StyledImg = styled("img")({
  objectFit: "cover",
  borderRadius: "5px",
  width: "100%",
  height: "100%",
});

export const StyledPaper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  gap: 15,
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0px 6px 16px 0px rgba(0, 0, 0, 0.12)",
});
