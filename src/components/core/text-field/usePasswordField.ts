import { useState } from "react";
import { InputType_Type } from "../../../types";

const usePasswordField = (inputType: InputType_Type) => {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  // handle toggle password input to text
  const togglePasswordType = (): void => {
    inputType === "password" && setIsShowing((prevValue) => !prevValue);
  };

  return { isShowing, togglePasswordType };
};

export default usePasswordField;
