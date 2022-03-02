import React, { FC, useReducer } from "react";
import { AuthContext, initialState, AuthReducer, AuthActions } from "./utils";
import { Children_Type } from "../../types";

// props interface
interface Props {
  children: Children_Type;
}

const AuthProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // call auth action function to get context values
  const values = AuthActions(state, dispatch);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
