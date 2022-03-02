import { FC } from "react";
import StyledLink from "../../core/styled-link";

const AuthFormsOverlay: FC = () => {
  return (
    <div className="w-full h-full bg-black300 backdrop-filter backdrop-blur rounded-3xl p-6">
      <div className="w-28 h-14 bg-white300 backdrop-filter backdrop-blur rounded-sm flex justify-center items-center">
        <h6 className="font-secoundary font-semibold text-white text-center">THE GOOD NETWORK</h6>
      </div>
      <div className="w-16 h-1 bg-white300 mt-7" />
      <div className="mt-7">
        <h6 className="text-white font-bold">WE ARE</h6>
        <p className="text-3xl text-white">Invite only right now.</p>
        <p className="mt-2 text-bgTertiary">
          10 milions people have joined our network.
        </p>
        <p className="text-bgTertiary">we invite you to join the tribe.</p>
        <p className="text-lg text-bgTertiary mt-16">Already have an account?</p>
        <StyledLink to="/auth#login" fontSize="lg" fontWeight="bold">
          Login
        </StyledLink>
      </div>
    </div>
  );
};

export default AuthFormsOverlay;
