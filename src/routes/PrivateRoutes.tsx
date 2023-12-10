import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthStore from "../store/auth.store";

interface PrivateRoutesProps {
  allowedRoles?: string[];
}

const PrivateRoutes = ({ allowedRoles }: PrivateRoutesProps) => {
  const authenticatedRole = useAuthStore((state) => state.authenticatedRole);
  const location = useLocation();

  return allowedRoles?.includes(authenticatedRole) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
