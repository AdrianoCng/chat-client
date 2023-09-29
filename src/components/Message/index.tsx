import * as Styled from "./styles";

interface Props {
  text: string;
  isMyMessage?: boolean;
}
export default function Message({ text, isMyMessage = false }: Props) {
  return <Styled.Message $isMyMessage={isMyMessage}>{text}</Styled.Message>;
}
