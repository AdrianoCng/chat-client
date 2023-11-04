import LoginForm from "@/containers/LoginForm";
import useAuthProviderContext from "@/contexts/AuthProvider/hooks/useAuthProviderContext";
import { Navigate } from "react-router-dom";

export default function Login() {
  const { isLoggedIn } = useAuthProviderContext();

  if (isLoggedIn) {
    return <Navigate to={"/chat"} />;
  }

  return <LoginForm />;
}
