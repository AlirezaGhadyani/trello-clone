import { useContext } from "react";
import { AuthContext } from "../store/auth-store/utils";

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
