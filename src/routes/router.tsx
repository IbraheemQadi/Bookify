import CheckoutPage from "@/pages/CheckoutPage";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import HotelDetailPage from "@/pages/HotelDetailPage";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import SearchPage from "@/pages/SearchPage";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <PrivateRoutes allowedRoles={["admin"]} />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <div>Admin Page</div> }],
  },
  {
    path: "/",
    element: <PrivateRoutes allowedRoles={["user"]} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: "/search", element: <SearchPage /> },
          { path: "/hotel/:id", element: <HotelDetailPage /> },
          { path: "/checkout", element: <CheckoutPage /> },
        ],
      },
    ],
  },
]);

export default router;
