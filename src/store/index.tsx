import { FC } from "react";
import { Children_Type } from "../types";
import AuthProvider from "./auth-store";

// props interface
interface Props {
  children: Children_Type;
}

const StoreProvider: FC<Props> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default StoreProvider;
