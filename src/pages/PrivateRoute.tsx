import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks";

// props interface
interface Props {
  children: any;
}

const PrivateRoute: FC<Props> = ({ children }) => {
  const { isLoggedin } = useAuthContext();

  return isLoggedin ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
