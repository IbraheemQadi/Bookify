import AdminLayout from "@/pages/AdminLayout";
import CheckoutPage from "@/pages/CheckoutPage";
import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/HomePage";
import HotelDetailPage from "@/pages/HotelDetailPage";
import LoginPage from "@/pages/LoginPage";
import SearchPage from "@/pages/SearchPage";
import UserLayout from "@/pages/UserLayout";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import CitiesTable from "@/component/CitiesTable/CitiesTable";
import { Typography } from "@mui/material";

const router = createBrowserRouter([
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
          { path: "cities", element: <CitiesTable /> },
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
    path: "/",
    element: <PrivateRoutes allowedRoles={["User"]} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
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
