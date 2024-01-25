import APIClient from "@/services/apiClient";
import useAuthStore from "@/store/auth.store";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
interface Props {
  allowedRoles?: string[];
}

const PrivateRoutes = ({ allowedRoles }: Props) => {
  const { user, signout } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    const token = Cookies.get("jwt");
    if (token) APIClient.setAuthorizationHeader(token);
  }, []);

  const currentTime = Date.now() / 1000;
  if (currentTime > (user?.exp || 0)) {
    signout();
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <>
      <ScrollToTop />
      {allowedRoles?.includes(user?.userType ?? "") ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
};

export default PrivateRoutes;
