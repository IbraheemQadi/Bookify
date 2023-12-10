import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthStore {
  authenticatedRole: string;
  signin: (userType: string) => void;
  signout: () => void;
}

const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        authenticatedRole: "",
        signin: (userType) => {
          switch (userType.toLowerCase()) {
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
          set({ authenticatedRole: "" });
        },
      }),
      { name: "auth-store" }
    )
  )
);

export default useAuthStore;
