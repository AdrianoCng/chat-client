import { createContext, useContext } from "react";
import { PublicChat } from "./usePublicChat";

interface ISocketContext {
  connected: boolean;
  publicChat?: PublicChat;
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
