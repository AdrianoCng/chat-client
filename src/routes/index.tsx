import LoginForm from "@/containers/LoginForm";
import useAuthProviderContext from "@/contexts/AuthProvider/hooks/useAuthProviderContext";
import { Navigate } from "react-router-dom";

export default function Login() {
  const { isLoggedIn, isLoading } = useAuthProviderContext();

  if (isLoggedIn) {
    return <Navigate to={"/chat"} />;
  }

  if (isLoading) {
    return null;
  }

  return <LoginForm />;
}
