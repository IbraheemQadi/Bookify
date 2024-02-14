import AdminLayout from "@/pages/AdminLayout";
import ErrorPage from "@/pages/ErrorPage";
import LoginPage from "@/pages/LoginPage";
import UserLayout from "@/pages/UserLayout";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import RootRoute from "./RootRoute";
import adminRoutes from "./adminRoutes";
import userRoutes from "./userRoutes";

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
        children: adminRoutes,
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
        children: userRoutes,
      },
    ],
  },
]);

export default router;
