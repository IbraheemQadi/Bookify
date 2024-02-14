import { Destination as DestinationType } from "@/pages/HomePage/entities/Destination";
import { CityName, StyledCard, StyledCardMedia } from "./styles";

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
