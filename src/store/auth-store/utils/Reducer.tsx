import { AuthContextInitialState_Type } from "../../../types";

// reducer type
type Reducer = {
  type: string;
  payload: any;
};

const AuthReducer = (
  state: AuthContextInitialState_Type,
  { type, payload }: Reducer
) => {
  switch (type) {
    default:
      return state;
  }
};

export default AuthReducer;
