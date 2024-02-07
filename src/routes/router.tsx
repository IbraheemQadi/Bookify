import AdminLayout from "@/pages/AdminLayout";
import CheckoutPage from "@/pages/CheckoutPage";
import CitiesDashboard from "@/pages/CitiesDashboard";
import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/HomePage";
import HotelDetailPage from "@/pages/HotelDetailPage";
import LoginPage from "@/pages/LoginPage";
import SearchPage from "@/pages/SearchPage";
import UserLayout from "@/pages/UserLayout";
import { Typography } from "@mui/material";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import RootRoute from "./RootRoute";

const router = createBrowserRouter([
  { path: "/", element: <RootRoute />, errorElement: <ErrorPage /> },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <PrivateRoutes allowedRoles={["Admin"]} />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { index: true, element: <CitiesDashboard /> },
          {
            path: "hotels",
            element: <Typography variant="h4">Hotels</Typography>,
          },
          {
            path: "rooms",
            element: <Typography variant="h4">Rooms</Typography>,
          },
        ],
      },
    ],
  },
  {
    path: "/user",
    element: <PrivateRoutes allowedRoles={["User"]} />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <UserLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "search", element: <SearchPage /> },
          { path: "hotel/:id", element: <HotelDetailPage /> },
          { path: "checkout", element: <CheckoutPage /> },
        ],
      },
    ],
  },
]);

export default router;
