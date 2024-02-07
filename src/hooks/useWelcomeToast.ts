import useAuthStore from "@/store/auth.store";
import { useEffect } from "react";
import toast from "react-hot-toast";

const useWelcomeToast = () => {
  const { user } = useAuthStore();

  useEffect(() => {
    toast.success(`Welcome back ${user?.given_name}`, { icon: "👋" });
  }, [user?.given_name]);
};

export default useWelcomeToast;
