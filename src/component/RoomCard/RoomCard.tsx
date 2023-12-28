import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Divider,
  Button,
  styled,
  Chip,
  Badge,
} from "@mui/material";
import { Room } from "../../entities/Room";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import ChildCareRoundedIcon from "@mui/icons-material/ChildCareRounded";
import Amenity from "../common/Amenity";

interface Props {
  room: Room;
}

const StyledBox = styled(Box)({
  position: "relative",
});

const StyledChip = styled(Chip)(() => ({
  position: "absolute",
  bottom: 10,
  left: 10,
  borderColor: "white",
  backgroundColor: "#fff",
  "font-weight": "bold",
  "font-size": "1.2rem",
  padding: "5px",
}));

const RoomCard = ({ room }: Props) => {
  return (
    <Card sx={{ borderRadius: "8px", width: "410px" }} variant="outlined">
      <StyledBox>
        <CardMedia component="img" height="150" image={room.roomPhotoUrl} />
        <StyledChip
          variant="outlined"
          size="medium"
          label={
            <Typography fontWeight={"bold"} variant="body1">
              ${room.price}
              <Typography variant="body2" component="span">
                /night
              </Typography>
            </Typography>
          }
        />
      </StyledBox>
      <CardContent>
        <Typography mb={2} fontWeight={"bold"} variant="h5" component="div">
          {room.roomType}
        </Typography>
        <Stack direction="row" alignItems="center" color="text.primary">
          <Badge
            sx={{ mr: 2 }}
            badgeContent={room.capacityOfAdults}
            color="primary"
          >
            <PersonOutlineRoundedIcon />
          </Badge>
          <Typography variant="body2" component="span">
            Adults
          </Typography>
          <Divider sx={{ marginInline: 1 }} orientation="vertical" flexItem />
          <Badge
            sx={{ mr: 2 }}
            badgeContent={room.capacityOfChildren}
            color="primary"
          >
            <ChildCareRoundedIcon />
          </Badge>
          <Typography variant="body2" component="span">
            Children
          </Typography>
        </Stack>
        <Divider sx={{ marginBlock: 1 }} />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap={"wrap"}
          color="text.primary"
          gap={0.5}
        >
          {room.roomAmenities.map((amenity) => (
            <Amenity
              key={amenity.name}
              amenity={amenity}
              checked={true}
              size="small"
            />
          ))}
        </Stack>
        <Divider sx={{ marginBlock: 1 }} />
        <Button fullWidth variant="contained">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
