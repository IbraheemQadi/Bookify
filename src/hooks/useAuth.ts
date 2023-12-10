import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import authService, {
  AuthRequest,
  AuthResponse,
} from "../services/authService";
import useAuthStore from "../store/auth.store";

const useAuth = () => {
  const { signin, signout } = useAuthStore();
  const navigate = useNavigate();

  return useMutation<AuthResponse, Error, AuthRequest>({
    mutationFn: authService.post,
    onSuccess: (data: AuthResponse) => {
      signin(data.userType);
      if (data.userType.toLowerCase() === "admin") {
        navigate("/admin");
      } else if (data.userType.toLowerCase() === "user") {
        navigate("/user");
      }
    },
    onError: () => {
      signout();
    },
  });
};

export default useAuth;
