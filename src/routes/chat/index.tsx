import Input from "@/components/Input";
import * as Styled from "./styles";
import Message from "@/components/Message";

export default function Chat() {
  return (
    <Styled.Container>
      <Styled.Sidebar>Sidebar</Styled.Sidebar>

      <Styled.Main>
        <Styled.ChatContent>
          <Message text="Hello World" />
        </Styled.ChatContent>
        <Input />
        {/* <Styled.InputText /> */}
      </Styled.Main>
    </Styled.Container>
  );
}
