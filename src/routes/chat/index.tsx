import * as Styled from "./styles";
import SendMessageForm from "@/containers/SendMessageForm";
import PublicChat from "@/containers/PublicChat";

export default function Chat() {
  return (
    <Styled.Container>
      <Styled.Sidebar>Sidebar</Styled.Sidebar>

      <Styled.Main>
        <PublicChat />
        <SendMessageForm />
      </Styled.Main>
    </Styled.Container>
  );
}
