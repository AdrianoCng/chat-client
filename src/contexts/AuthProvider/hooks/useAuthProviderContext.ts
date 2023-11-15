import { createContext, useContext } from "react";

export type Status = "online" | "offline" | "away";
export interface User {
  username: string;
  _id: string;
  __v: number;
  status: Status;
  createdAt: Date;
  lastLoginAt: Date;
}

interface AuthProviderContext {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

export const authProviderContext = createContext<AuthProviderContext | undefined>(undefined);

export default function useAuthProviderContext() {
  const context = useContext(authProviderContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider context");
  }

  return context;
}
