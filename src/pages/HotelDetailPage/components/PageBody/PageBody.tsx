import { Hotel } from "@/entities/Hotel";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import AvailableRoomsGrid from "../../components/AvailableRoomsGrid";
import HotelInformation from "../../components/HotelInformation";

function PageBody({ hotel }: { hotel: Hotel }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack gap={3} direction={isMobile ? "column" : "row"} mt={2}>
      <HotelInformation hotel={hotel ?? ({} as Hotel)} />
      <Box>
        <AvailableRoomsGrid hotel={hotel ?? ({} as Hotel)} />
      </Box>
    </Stack>
  );
}

export default PageBody;
