import api from "@/configs/api";
import { useMutation } from "@tanstack/react-query";
import useAuthProviderContext from "../contexts/AuthProvider/hooks/useAuthProviderContext";
import socket from "@/configs/socket";

export default function useLogout() {
  const { logout } = useAuthProviderContext();

  const { mutate, ...mutation } = useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      logout();
      socket.disconnect();

      const { data } = await api({
        url: "auth/logout",
        method: "POST",
      });

      return data;
    },
  });

  return [mutate, { ...mutation }] as const;
}
