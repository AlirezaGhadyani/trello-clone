import { FC } from "react";
import { Children_Type } from "../types";
import StoreProvider from "../store";

// props interface
interface Props {
  children: Children_Type;
}

const Layout: FC<Props> = ({ children }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default Layout;
