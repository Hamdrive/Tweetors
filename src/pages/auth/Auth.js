import { useAuth } from "../../context";
import { LogIn } from "../logIn/LogIn";
import { SignUp } from "../signUp/SignUp";

export const Auth = () => {
  const { isNewUser } = useAuth();

  return <>{isNewUser ? <SignUp /> : <LogIn />}</>;
};
