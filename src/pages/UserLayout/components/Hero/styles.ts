import { styled } from "@mui/material";

const heroPadding = "30px";

export const styles = {
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

export const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "5px",
  filter: "blur(.5px) brightness(90%)",
});
