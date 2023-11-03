import { useState, useEffect } from "react";
import socket from "@/configs/socket";
import { Message, CHAT_EVENT } from "@/types/socketTypes";

export interface PublicChat {
  chatId: string;
  messages: Message[];
  __v: number;
  _id: string;
}

export default function usePublicChat() {
  const [publicChat, setPublicChat] = useState<PublicChat>();

  useEffect(() => {
    function onChatHistory(publicChat: PublicChat) {
      setPublicChat(publicChat);
    }

    socket.on(CHAT_EVENT.HISTORY, onChatHistory);

    return () => {
      socket.off(CHAT_EVENT.HISTORY, onChatHistory);
    };
  }, []);

  return publicChat;
}
