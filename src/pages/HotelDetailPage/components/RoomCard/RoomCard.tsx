import Amenity from "@/components/Amenity";
import { Hotel } from "@/entities/Hotel";
import { Room } from "@/entities/Room";
import useBookingStore from "@/store/booking.store";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChildCareRoundedIcon from "@mui/icons-material/ChildCareRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import { IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledChip } from "./styles";

interface Props {
  hotel: Hotel;
  room: Room;
}

const RoomCard = ({ hotel, room }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    booking: { room: bookedRoom },
    isReserved,
    reserve,
    unreserve,
  } = useBookingStore();

  const isBookedRoom = room?.roomNumber === bookedRoom?.roomNumber;
  const isNotBookable = !isBookedRoom && isReserved;

  const queryParams = new URLSearchParams(location.search);
  const checkInDate = queryParams.get("checkInDate") ?? "";
  const checkOutDate = queryParams.get("checkOutDate") ?? "";
  const adults = queryParams.get("adults") ?? "";
  const children = queryParams.get("children") ?? "";

  const handleReserveRoom = () => {
    reserve({
      hotel,
      room,
      checkInDate,
      checkOutDate,
      adults: parseInt(adults),
      children: parseInt(children),
    });

    toast.success(
      (t) => (
        <Stack direction="row" alignItems="center">
          <Typography variant="body1" color="text.primary">
            Finish you booking
          </Typography>
          <IconButton
            onClick={() => {
              navigate("/user/checkout");
              toast.dismiss(t.id);
            }}
            color="primary"
          >
            <ChevronRightIcon />
          </IconButton>
        </Stack>
      ),
      { position: "top-right", duration: 3000 }
    );
  };

  const handleCancelReservation = () => {
    unreserve();
  };

  return (
    <Card variant="outlined">
      <Box position="relative">
        <CardMedia component="img" height="150" image={room.roomPhotoUrl} />
        <StyledChip
          variant="outlined"
          size="medium"
          label={
            <Typography color="primary" fontWeight="bold" variant="body1">
              {room.price}
              <Typography component={"span"} color="text.secondary">
                /night
              </Typography>
            </Typography>
          }
        />
      </Box>
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
          flexWrap="wrap"
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
        <Button
          variant="contained"
          fullWidth
          disabled={isNotBookable}
          onClick={isBookedRoom ? handleCancelReservation : handleReserveRoom}
          sx={{ textTransform: "none" }}
        >
          {isBookedRoom ? "Cancel Reservation" : "Reserve Room"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
