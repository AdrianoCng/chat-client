import useSocketContext from "@/contexts/SocketProvider/hooks/useSocketContext.ts";
import * as Styled from "./styles.tsx";
import Message from "@/components/Message";
import { useEffect, useRef } from "react";
import useAuthProviderContext from "@/contexts/AuthProvider/hooks/useAuthProviderContext.ts";

export default function PublicChat() {
  const chatRef = useRef<HTMLDivElement>(null);
  const { publicChat, newPublicMessages } = useSocketContext();
  const { user } = useAuthProviderContext();

  const history = publicChat?.messages || [];

  const messages = [...history, ...newPublicMessages];

  useEffect(() => {
    const wrapper = chatRef.current;

    if (!wrapper) return;

    wrapper.scrollTop = wrapper.scrollHeight;
  }, [messages.length]);

  return (
    <Styled.ChatContent ref={chatRef}>
      {messages.map(({ text, sender, timestamp, _id }) => (
        <Message
          key={_id}
          text={text}
          author={sender.username}
          timestamp={timestamp}
          isMyMessage={user?._id === sender._id}
        />
      ))}
    </Styled.ChatContent>
  );
}
