import CheckoutPage from "@/pages/CheckoutPage";
import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/HomePage";
import HotelDetailPage from "@/pages/HotelDetailPage";
import Layout from "@/pages/Layout";
import LoginPage from "@/pages/LoginPage";
import SearchPage from "@/pages/SearchPage";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

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
    children: [{ index: true, element: <div>Admin Page</div> }],
  },
  {
    path: "/",
    element: <PrivateRoutes allowedRoles={["User"]} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "/search", element: <SearchPage /> },
          { path: "/hotel/:id", element: <HotelDetailPage /> },
          { path: "/checkout", element: <CheckoutPage /> },
        ],
      },
    ],
  },
]);

export default router;
