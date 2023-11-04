import * as Styled from "./styles";
import SendMessageForm from "@/containers/SendMessageForm";
import PublicChat from "@/containers/PublicChat";
import Sidebar from "@/containers/Sidebar";

export default function Chat() {
  return (
    <Styled.Container>
      <Sidebar />

      <Styled.Main>
        <PublicChat />
        <SendMessageForm />
      </Styled.Main>
    </Styled.Container>
  );
}
