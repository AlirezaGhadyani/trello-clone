import { FC } from "react";
import AuthFormsOverlay from "./overlay";
import Login from "./login";
// import Signup from "./signup";

const AuthForms: FC = () => {
  return (
    <div className="h-4/5 w-3/5 bg-bgSecoundary rounded-2xl shadow-2xl overflow-hidden flex lg:flex-row lg:items-center">
      <div className="w-1/2 h-full bg-auth-form-overlay bg-center bg-cover rounded-tr-3xl rounded-br-3xl shadow-2xl flex justify-center items-center overflow-hidden p-10">
        <AuthFormsOverlay />
      </div>
      <div className="w-1/2 h-full p-10">
        <div className="w-full flex flex-col items-start p-6">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default AuthForms;
