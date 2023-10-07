import { createContext, useContext } from "react";

export interface User {
  username: string;
  _id: string;
  __v: number;
}

interface AuthProviderContext {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isLoggedIn: boolean;
  isLoading: boolean;
}

export const authProviderContext = createContext<
  AuthProviderContext | undefined
>(undefined);

export default function useAuthProviderContext() {
  const context = useContext(authProviderContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider context");
  }

  return context;
}
