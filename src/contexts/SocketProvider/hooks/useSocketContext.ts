import { createContext, useContext } from "react";
import { PublicChat } from "./usePublicChat";
import { Message } from "@/types/socketTypes";

interface ISocketContext {
  connected: boolean;
  publicChat?: PublicChat;
  newPublicMessages: Message[];
}

export const socketContext = createContext<ISocketContext | undefined>(
  undefined
);

export default function useSocketContext() {
  const context = useContext(socketContext);

  if (!context) {
    throw new Error(
      "useSocketContext must be used within SocketProvider context"
    );
  }

  return context;
}
