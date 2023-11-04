import * as Styled from "./styles";
import {
  FormEventHandler,
  useEffect,
  useState,
  ChangeEventHandler,
} from "react";
import { BsFillSendFill } from "react-icons/bs";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { CHAT_EVENT } from "@/types/socketTypes";
import socket from "@/configs/socket";
import useAuthProviderContext from "@/contexts/AuthProvider/hooks/useAuthProviderContext";
import useSocketContext from "@/contexts/SocketProvider/hooks/useSocketContext";
import TypingNotification from "@/components/TypingNotification";

export default function SendMessageForm() {
  const { user } = useAuthProviderContext();
  const { publicUsersTyping } = useSocketContext();
  const [inputValue, setInputValue] = useState("");

  const isTyping = !!inputValue;

  useEffect(() => {
    if (!user?.username) return;

    socket.emit(CHAT_EVENT.PUBLIC_TYPING, {
      username: user.username,
      isTyping,
    });
  }, [user?.username, isTyping]);

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!inputValue) return;

    socket.emit(CHAT_EVENT.MESSAGE, inputValue);

    setInputValue("");
  };

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setInputValue(e.target.value);

  return (
    <Styled.Wrapper>
      <TypingNotification usersTyping={publicUsersTyping} />

      <Styled.Form onSubmit={handleOnSubmit}>
        <Input value={inputValue} onChange={handleOnChange} />

        <Button>
          Send <BsFillSendFill />
        </Button>
      </Styled.Form>
    </Styled.Wrapper>
  );
}
