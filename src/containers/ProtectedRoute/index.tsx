import { Navigate, Outlet } from "react-router-dom";

import useAuthProviderContext from "@/contexts/AuthProvider/hooks/useAuthProviderContext";

export default function ProtectedRoute() {
  const { isLoggedIn } = useAuthProviderContext();

  if (!isLoggedIn) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
}
