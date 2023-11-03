import { createContext, useContext } from "react";

interface ISocketContext {
  connected: boolean;
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
