import { Typography, styled } from "@mui/material";
import { Destination as DestinationType } from "../../entities/Destination";

const StyledCard = styled("div")({
  overflow: "hidden",
  position: "relative",
  width: "100%",
  height: "100%",
});

const StyledCardMedia = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "8px",
});

const CityName = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(3),
  left: theme.spacing(2),
  color: theme.palette.common.white,
  textShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)",
  fontWeight: "bold",
}));

interface Props {
  destination: DestinationType;
}

function Destination({ destination }: Props) {
  const { thumbnailUrl, cityName } = destination;

  return (
    <StyledCard>
      <StyledCardMedia src={thumbnailUrl} alt={cityName} />
      <CityName variant="h5">{cityName}</CityName>
    </StyledCard>
  );
}

export default Destination;
