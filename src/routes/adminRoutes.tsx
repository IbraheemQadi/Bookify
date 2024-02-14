import CitiesDashboard from "@/pages/CitiesDashboard";
import { Typography } from "@mui/material";

const adminRoutes = [
  { index: true, element: <CitiesDashboard /> },
  {
    path: "hotels",
    element: <Typography variant="h4">Hotels</Typography>,
  },
  {
    path: "rooms",
    element: <Typography variant="h4">Rooms</Typography>,
  },
];

export default adminRoutes;
