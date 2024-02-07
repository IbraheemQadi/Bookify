import useAuthStore from "@/store/auth.store";
import { Navigate, useLocation } from "react-router-dom";

function RootRoute() {
  const { user } = useAuthStore();
  const location = useLocation();

  if (user?.userType === "Admin") {
    return <Navigate to="/admin" state={{ from: location }} replace />;
  } else if (user?.userType === "User") {
    return <Navigate to="/user" state={{ from: location }} replace />;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
}

export default RootRoute;
