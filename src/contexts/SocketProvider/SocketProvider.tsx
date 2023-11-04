import { useEffect, useState } from "react";
import socket from "@/configs/socket";
import { socketContext } from "@/contexts/SocketProvider/hooks/useSocketContext";
import useAuthProviderContext from "../AuthProvider/hooks/useAuthProviderContext";
import useNewPublicMessages from "./listeners/useNewPublicMessages";
import usePublicChat from "./listeners/usePublicChat";
import usePublicUsersTyping from "./listeners/usePublicUsersTyping";

interface SocketProviderProps {
  children: React.ReactNode;
}

export default function SocketProvider({ children }: SocketProviderProps) {
  const [connected, setConnected] = useState(socket.connected);

  const { isLoggedIn } = useAuthProviderContext();
  const publicChat = usePublicChat();
  const newPublicMessages = useNewPublicMessages();
  const publicUsersTyping = usePublicUsersTyping();

  useEffect(() => {
    if (!isLoggedIn) return;

    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, [isLoggedIn]);

  useEffect(() => {
    function onConnect() {
      console.log("Socket connected");
      setConnected(true);
    }

    function onDisconnect() {
      console.log("Socket disconnected");
      setConnected(false);
    }

    function onConnectError() {
      console.log("Socket connected");
    }

    function onConnectTimeout() {
      console.log("Socket connected");
    }

    socket.on("connect", onConnect);

    socket.on("disconnect", onDisconnect);

    socket.on("connect_error", onConnectError);

    socket.on("connect_timeout", onConnectTimeout);

    return () => {
      socket.off("connect", onConnect);

      socket.off("disconnect", onDisconnect);

      socket.off("connect_error", onConnectError);

      socket.off("connect_timeout", onConnectTimeout);
    };
  }, []);

  return (
    <socketContext.Provider
      value={{
        connected,
        publicChat,
        newPublicMessages,
        publicUsersTyping,
      }}
    >
      {children}
    </socketContext.Provider>
  );
}
