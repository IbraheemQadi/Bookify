import { useEffect } from "react";

const useAutoSignout = (expTime: number, signout: () => void) => {
  useEffect(() => {
    const currentTime = Date.now() / 1000;
    const remainingTime = expTime - currentTime;

    if (remainingTime > 0) {
      const logoutTimer = setTimeout(() => {
        signout();
      }, remainingTime * 1000);

      return () => clearTimeout(logoutTimer);
    } else signout();
  }, [expTime, signout]);
};

export default useAutoSignout;
