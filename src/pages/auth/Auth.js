import { useAuth } from "../../context";
import { Dashboard } from "../dashboard/Dashboard";
import { LogIn } from "../logIn/LogIn";
import { SignUp } from "../signUp/SignUp";

export const Auth = () => {
  const { user, isNewUser } = useAuth();

  return <>{user ? <Dashboard /> : isNewUser ? <SignUp /> : <LogIn />}</>;
};
