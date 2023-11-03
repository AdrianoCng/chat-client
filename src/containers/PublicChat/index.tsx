import useSocketContext from "@/contexts/SocketProvider/hooks/useSocketContext.ts";
import * as Styled from "./styles.tsx";
import Message from "@/components/Message";
import { useEffect, useRef } from "react";

export default function PublicChat() {
  const chatRef = useRef<HTMLDivElement>(null);
  const { publicChat, newPublicMessages } = useSocketContext();

  const history = publicChat?.messages || [];

  const newMessages = newPublicMessages;

  const messages = [...history, ...newMessages];

  useEffect(() => {
    const wrapper = chatRef.current;

    if (!wrapper) return;

    wrapper.scrollTop = wrapper.scrollHeight;
  }, [history.length]);

  return (
    <Styled.ChatContent ref={chatRef}>
      {messages.map(({ text, sender, timestamp, _id }) => (
        <Message
          key={_id}
          text={text}
          author={sender.username}
          timestamp={timestamp}
        />
      ))}
    </Styled.ChatContent>
  );
}
