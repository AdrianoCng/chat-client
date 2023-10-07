import { Navigate, Outlet } from "react-router-dom";

import useAuthProviderContext from "@/hooks/useAuthProviderContext";

export default function ProtectedRoute() {
  const { isLoggedIn, isLoading } = useAuthProviderContext();

  if (!isLoggedIn) {
    return <Navigate to={"/"} />;
  }

  if (isLoading) {
    return null;
  }

  return <Outlet />;
}
