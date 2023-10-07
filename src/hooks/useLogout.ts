import api from "@/configs/api";
import { useMutation } from "@tanstack/react-query";
import useAuthProviderContext from "./useAuthProviderContext";
import { socket } from "@/configs/socket";

export default function useLogout() {
  const { logout } = useAuthProviderContext();
  useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      const { data, status } = await api({
        url: "auth/logout",
        method: "POST",
      });

      if (status < 400) {
        logout();
      }

      return data;
    },
    onSuccess() {
      logout();
      socket.close();
    },
  });
}
