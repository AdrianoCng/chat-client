import { useCallback, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import {
  authProviderContext,
  User,
} from "@/contexts/AuthProvider/hooks/useAuthProviderContext";
import api from "@/configs/api";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  useQuery({
    queryKey: ["check-auth"],
    queryFn: async () => {
      try {
        const { data, status } = await api<User>({
          url: "auth/check",
          method: "GET",
        });

        if (status !== 401) {
          setUser(data);
        }

        return data;
      } catch (error) {
        setUser(null);
        return error;
      }
    },
    enabled: !user,
  });

  const login = useCallback(
    (user: User) => {
      setUser(user);
    },
    [setUser]
  );

  const logout = useCallback(() => {
    setUser(null);
  }, [setUser]);

  return (
    <authProviderContext.Provider
      value={{ user, login, logout, isLoggedIn: !!user }}
    >
      {children}
    </authProviderContext.Provider>
  );
}
