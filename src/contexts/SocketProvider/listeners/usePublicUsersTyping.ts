import socket from "@/configs/socket";
import { CHAT_EVENT } from "@/types/socketTypes";
import { useEffect, useState } from "react";

export interface TypingUser {
  username: string;
  isTyping: boolean;
}

export default function usePublicUsersTyping() {
  const [usersTyping, setUsersTyping] = useState<string[]>([]);

  useEffect(() => {
    function onPublicTyping({ username, isTyping }: TypingUser) {
      setUsersTyping((prev) =>
        isTyping
          ? Array.from(new Set([...prev, username]))
          : prev.filter((user) => user !== username)
      );
    }

    socket.on(CHAT_EVENT.PUBLIC_TYPING, onPublicTyping);

    return () => {
      socket.off(CHAT_EVENT.PUBLIC_TYPING, onPublicTyping);
    };
  }, []);

  return usersTyping;
}
