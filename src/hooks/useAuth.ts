import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { AuthRequest, AuthResponse } from "../entities/Auth";
import APIClient from "../services/apiClient";
import useAuthStore from "../store/auth.store";

const authService = new APIClient<AuthRequest, AuthResponse>(
  "/auth/authenticate"
);

const useAuth = () => {
  const { signin, signout } = useAuthStore();
  const navigate = useNavigate();

  return useMutation<AuthResponse, Error, AuthRequest>({
    mutationFn: authService.post,
    onSuccess: (data: AuthResponse) => {
      Cookies.set("jwt", data.authentication, { secure: true });

      const userType = data.userType.toLowerCase();
      signin(userType);
      userType === "admin"
        ? navigate("/admin")
        : userType === "user" && navigate("/");
    },
    onError: () => {
      signout();
    },
  });
};

export default useAuth;
