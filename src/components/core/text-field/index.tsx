import { FC } from "react";
import { Typography_Type, Spacing_Type, InputType_Type } from "../../../types";
import Image from "../image";
import usePasswordField from "./usePasswordField";

// props interface
interface Props {
  name: string;
  type: InputType_Type;
  placeholder: string;
  containerProps: Spacing_Type;
  label?: string;
  labelProps?: Typography_Type & Spacing_Type;
  icon?: string;
}

const TextField: FC<Props> = ({
  containerProps,
  label,
  labelProps = { fontSize: "base", fontWeight: "normal", color: "textPrimary" },
  icon,
  ...props
}) => {
  // use usePasswordField hook
  const { isShowing, togglePasswordType } = usePasswordField(props.type);

  // render labelClasses
  const labelClasses = `text-${labelProps.fontSize} font-${
    labelProps.fontWeight
  } text-${labelProps.color} ${
    labelProps.mgTop ? `mt-${labelProps.mgTop}` : ""
  } ${labelProps.mgBottom ? `mb-${labelProps.mgBottom}` : ""} ${
    labelProps.mgLeft ? `ml-${labelProps.mgLeft}` : ""
  } ${labelProps.mgRight ? `mr-${labelProps.mgRight}` : ""}`.trim();

  // render containerClasses
  const containerClasses = `w-full flex flex-col items-start justify-center ${
    containerProps.mgTop ? `mt-${containerProps.mgTop}` : ""
  } ${containerProps.mgBottom ? `mb-${containerProps.mgBottom}` : ""} ${
    containerProps.mgLeft ? `ml-${containerProps.mgLeft}` : ""
  } ${containerProps.mgRight ? `mr-${containerProps.mgRight}` : ""}`.trim();

  // render text field type
  const fieldType =
    props.type === "password" ? (isShowing ? "text" : "password") : props.type;

  return (
    <div className={containerClasses}>
      {label && <label className={labelClasses}>{label}</label>}
      <div
        className={`w-full border border-black200 rounded-md overflow-hidden flex justify-between ${
          icon ? "pr-2" : props.type === "password" ? "pr-2" : ""
        }`}
      >
        <input
          className="w-full rounded-md p-2 focus:outline-none"
          {...props}
          type={fieldType}
        />
        {icon ? (
          <Image dir="icons" fileName={icon} alt="input icon" />
        ) : props.type === "password" ? (
          isShowing ? (
            <Image
              dir="icons"
              fileName="pass-eye-off.svg"
              alt="input icon"
              className="w-7 cursor-pointer"
              onClick={togglePasswordType}
            />
          ) : (
            <Image
              dir="icons"
              fileName="pass-eye.svg"
              alt="input icon"
              className="w-6 cursor-pointer"
              onClick={togglePasswordType}
            />
          )
        ) : null}
      </div>
    </div>
  );
};

export default TextField;
