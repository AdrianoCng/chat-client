import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import api from "@/configs/api";
import useAuthProviderContext, {
  User,
} from "../contexts/AuthProvider/hooks/useAuthProviderContext";

interface LoginCredentials {
  username: string;
  password: string;
}
export default function useLogin() {
  const { login } = useAuthProviderContext();

  const mutation = useMutation<User, AxiosError, LoginCredentials>({
    mutationKey: ["login"],
    mutationFn: async ({ username, password }) => {
      const { data } = await api({
        url: "/auth/login",
        method: "POST",
        data: {
          username,
          password,
        },
      });

      return data;
    },
    async onSuccess(data) {
      try {
        login(data);
      } catch (error) {
        console.log("connection failed: ", error);
        throw error;
      }
    },
  });

  return [mutation.mutate, { ...mutation }] as const;
}
