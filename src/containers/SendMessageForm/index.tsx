import * as Styled from "./styles";
import { useRef, FormEventHandler } from "react";
import { BsFillSendFill } from "react-icons/bs";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { CHAT_EVENT } from "@/types/socketTypes";
import socket from "@/configs/socket";

export default function SendMessageForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const text = inputRef.current?.value;

    if (!text) return;

    socket.emit(CHAT_EVENT.MESSAGE, text);

    inputRef.current.value = "";
  };

  return (
    <Styled.Form onSubmit={handleOnSubmit}>
      <Input ref={inputRef} />

      <Button>
        Send <BsFillSendFill />
      </Button>
    </Styled.Form>
  );
}
