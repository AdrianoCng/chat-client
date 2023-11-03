import socket from "@/configs/socket";
import { CHAT_EVENT, Message } from "@/types/socketTypes";
import { useEffect, useState } from "react";

export default function useNewPublicMessages() {
  const [newMessages, setNewMessages] = useState<Message[]>([]);

  useEffect(() => {
    function onMessage(message: Message) {
      setNewMessages((prev) => [...prev, message]);
    }

    socket.on(CHAT_EVENT.MESSAGE, onMessage);

    return () => {
      socket.off(CHAT_EVENT.MESSAGE, onMessage);
    };
  }, []);

  return newMessages;
}
