import * as Styled from "./styles";

interface Props {
  usersTyping: string[];
}

export default function TypingNotification({ usersTyping }: Props) {
  const numberOfUserTyping = usersTyping.length;
  const maxUsersToShow = 2;

  let text = "";

  switch (true) {
    case numberOfUserTyping === 1:
      text = "is typing";
      break;

    case numberOfUserTyping > 1 && numberOfUserTyping <= maxUsersToShow:
      text = "are typing";
      break;

    default:
      text = `and ${numberOfUserTyping - maxUsersToShow} more are typing`;
  }

  return (
    <Styled.TypingNotification>
      {numberOfUserTyping > 0 && (
        <Styled.Span>{`${usersTyping
          .slice(0, maxUsersToShow)
          .join(", ")} ${text}`}</Styled.Span>
      )}
    </Styled.TypingNotification>
  );
}
