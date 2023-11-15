import socket from "@/configs/socket";
import { Status, User } from "@/contexts/AuthProvider/hooks/useAuthProviderContext";
import { CHAT_EVENT } from "@/types/socketTypes";
import { useEffect, useState } from "react";

export default function useUsersList() {
  const [usersList, setUsersList] = useState<User[]>([]);

  useEffect(() => {
    function onUsersList(users: User[]) {
      setUsersList(users);
    }

    function onUserStatusUpdate({ userId, status }: { userId: string; status: Status }) {
      setUsersList((prev) =>
        prev
          .map((user) => (user._id === userId ? { ...user, status } : user))
          .sort((a, b) => b.status.localeCompare(a.status)),
      );
    }

    socket.on(CHAT_EVENT.USERS_LIST, onUsersList);

    socket.on(CHAT_EVENT.USER_STATUS_UPDATE, onUserStatusUpdate);

    return () => {
      socket.off(CHAT_EVENT.USERS_LIST, onUsersList);
      socket.off(CHAT_EVENT.USER_STATUS_UPDATE, onUserStatusUpdate);
    };
  }, []);

  return usersList;
}
