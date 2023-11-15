import { createContext, useContext } from "react";
import { Message } from "@/types/socketTypes";
import { PublicChat } from "../listeners/usePublicChat";
import { User } from "@/contexts/AuthProvider/hooks/useAuthProviderContext";

interface ISocketContext {
  connected: boolean;
  publicChat?: PublicChat;
  newPublicMessages: Message[];
  publicUsersTyping: string[];
  usersList: User[];
}

export const socketContext = createContext<ISocketContext | undefined>(undefined);

export default function useSocketContext() {
  const context = useContext(socketContext);

  if (!context) {
    throw new Error("useSocketContext must be used within SocketProvider context");
  }

  return context;
}
