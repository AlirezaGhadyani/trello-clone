import { FC } from "react";
import { Children_Type, Spacing_Type, Typography_Type } from "../../../types";

// props interface
interface Props extends Spacing_Type, Typography_Type {
  children: Children_Type;
}

const Button: FC<Props> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
