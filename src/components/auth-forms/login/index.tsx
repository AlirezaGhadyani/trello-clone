import { FC } from "react";
import TextField from "../../core/text-field";

const AuthLogin: FC = () => {
  return (
    <>
      <h3 className="text-3xl font-bold">Login</h3>
      <TextField
        name="email"
        type="email"
        placeholder="Enter Your Email"
        label="Email Address"
        labelProps={{
          mgBottom: "1.5",
          fontSize: "sm",
          fontWeight: "bold",
        }}
        containerProps={{ mgTop: "8" }}
      />
      <TextField
        name="password"
        type="password"
        placeholder="Enter Password"
        label="Password"
        labelProps={{
          mgBottom: "1.5",
          fontSize: "sm",
          fontWeight: "bold",
        }}
        containerProps={{ mgTop: "5" }}
      />
    </>
  );
};

export default AuthLogin;
