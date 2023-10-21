import { PropsWithChildren, FC, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUserDataState } from "../global/jotai";
import jwtDecode from "jwt-decode";
const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const [userState, setUserState] = useUserDataState();

  const data = JSON.parse(localStorage.getItem("stateUsers")!);

  useEffect(() => {
    setUserState(jwtDecode(data)!);
  }, []);

  return <div>{data ? <div>{children}</div> : <Navigate to="/sign-in" />}</div>;
};

export default PrivateRoute;
