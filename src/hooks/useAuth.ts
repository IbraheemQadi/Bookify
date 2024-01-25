import { AuthRequest, AuthResponse } from "@/entities/Auth";
import APIClient from "@/services/apiClient";
import useAuthStore from "@/store/auth.store";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const authService = new APIClient<AuthRequest, AuthResponse>(
  "/auth/authenticate"
);

const useAuth = () => {
  const { signin, signout } = useAuthStore();
  const navigate = useNavigate();

  return useMutation<AuthResponse, Error, AuthRequest>({
    mutationFn: authService.post,
    onSuccess: (data: AuthResponse) => {
      const userType = data.userType.toLowerCase();
      signin(data.authentication);
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
