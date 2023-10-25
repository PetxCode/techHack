import { PropsWithChildren, FC, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUserDataState } from "../global/jotai";
import jwtDecode from "jwt-decode";
import ScrollToTop from "../scrollToTop";
const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const [userState, setUserState] = useUserDataState();

  const data = JSON.parse(localStorage.getItem("stateUsers")!);
  console.log(userState);

  useEffect(() => {
    setUserState(jwtDecode(data)!);
  }, []);

  return (
    <div>
      {data ? (
        <ScrollToTop>{children}</ScrollToTop>
      ) : (
        <Navigate to="/sign-in" />
      )}
    </div>
  );
};

export default PrivateRoute;
