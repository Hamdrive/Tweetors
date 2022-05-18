import { useAuth } from "../../context";
import { Dashboard } from "../dashboard/Dashboard";
import { LogIn } from "../logIn/LogIn";
import { SignUp } from "../signUp/SignUp";

export const Auth = () => {
  const { user, loginPage } = useAuth();

  return <>{user ? <Dashboard /> : loginPage ? <LogIn /> : <SignUp />}</>;
};
