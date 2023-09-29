import Input from "@/components/Input";
import * as Styled from "./styles";
import Message from "@/components/Message";

export default function Chat() {
  return (
    <Styled.Container>
      <Styled.Sidebar>Sidebar</Styled.Sidebar>

      <Styled.Main>
        <Styled.ChatContent>
          <Message
            text="Hello World"
            author="Robert"
            timestamp="2023-09-29T14:48:00.000Z"
          />
          <Message
            text="Hi"
            author="John"
            timestamp="2011-10-05T14:48:00.000Z"
          />
        </Styled.ChatContent>
        <Input />
        {/* <Styled.InputText /> */}
      </Styled.Main>
    </Styled.Container>
  );
}
