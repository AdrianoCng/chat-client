import * as Styled from "./styles";
import Input from "@/components/Input";
import PublicChat from "@/containers/PublicChat";

export default function Chat() {
  return (
    <Styled.Container>
      <Styled.Sidebar>Sidebar</Styled.Sidebar>

      <Styled.Main>
        <PublicChat />
        <Input />
      </Styled.Main>
    </Styled.Container>
  );
}
