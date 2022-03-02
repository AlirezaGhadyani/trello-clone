import { FC } from "react";
import { Link } from "react-router-dom";
import { Children_Type, Typography_Type } from "../../../types";

// props interface
interface Props extends Typography_Type {
  children: Children_Type;
  to: string;
}

const StyledLink: FC<Props> = ({
  children,
  fontSize = "base",
  fontWeight = "bold",
  color = "white",
  ...props
}) => {
  const classNames: string = `text-${fontSize} font-${fontWeight} text-${color}`;

  return (
    <Link {...props} className={classNames}>
      {children}
    </Link>
  );
};

export default StyledLink;
