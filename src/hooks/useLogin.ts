import { useMutation } from "@tanstack/react-query";
import api from "@/configs/api";
import { AxiosError } from "axios";

import connectSocket from "@/configs/socket";

interface LoginCredentials {
  username: string;
  password: string;
}
export default function useLogin() {
  const mutation = useMutation<string, AxiosError, LoginCredentials>({
    mutationFn: ({ username, password }) => {
      return api({
        url: "/auth/login",
        method: "POST",
        data: {
          username,
          password,
        },
      });
    },
    async onSuccess() {
      try {
        await connectSocket();
      } catch (error) {
        console.log("connection failed: ", error);
        throw error;
      }
    },
  });

  return [mutation.mutate, { ...mutation }] as const;
}
