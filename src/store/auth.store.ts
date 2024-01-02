import Cookies from "js-cookie";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import getDecodedJWT, { DecodedJWTUser } from "../utils/getDecodedJWT";

interface AuthStore {
  authenticatedRole: string;
  user: DecodedJWTUser | null;
  signin: (userType: string) => void;
  signout: () => void;
}

const useAuthStore = create<AuthStore>()(
  devtools((set) => ({
    authenticatedRole: getDecodedJWT()?.userType.toLowerCase() || "",
    user: getDecodedJWT(),
    signin: (userType: string) => {
      set({ user: getDecodedJWT() });
      switch (userType) {
        case "admin":
          set({ authenticatedRole: "admin" });
          break;
        case "user":
          set({ authenticatedRole: "user" });
          break;
        default:
          set({ authenticatedRole: "" });
      }
    },
    signout: () => {
      set({ authenticatedRole: "", user: null });
      Cookies.remove("jwt");
    },
  }))
);

export default useAuthStore;
