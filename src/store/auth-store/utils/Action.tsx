import { AuthContextInitialState_Type } from "../../../types";

interface AuthActions_Type extends AuthContextInitialState_Type {}

const AuthActions = (
  state: AuthContextInitialState_Type,
  dispatch: any
): AuthActions_Type => {
  // return values
  return {
    isLoggedin: state.isLoggedin,
    userData: state.userData,
  };
};

export default AuthActions;
