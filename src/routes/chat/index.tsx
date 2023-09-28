import Input from "@/components/Input";
import * as Styled from "./styles";

export default function Chat() {
  return (
    <Styled.Container>
      <Styled.Sidebar>Sidebar</Styled.Sidebar>

      <Styled.Main>
        <Styled.ChatContent>Main</Styled.ChatContent>
        <Input />
        {/* <Styled.InputText /> */}
      </Styled.Main>
    </Styled.Container>
  );
}
