import * as Styled from "./styles";

const monthAbbreviations = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

interface Props {
  text: string;
  timestamp: string;
  author?: string;
  isMyMessage?: boolean;
}
export default function Message({
  text,
  timestamp,
  author,
  isMyMessage = false,
}: Props) {
  const dateObject = new Date(timestamp);
  const currentDate = new Date();

  const isToday = dateObject.toDateString() === currentDate.toDateString();

  let formattedDateTime;

  if (isToday) {
    // Display time only for today
    const hours = dateObject.getHours().toString().padStart(2, "0");
    const minutes = dateObject.getMinutes().toString().padStart(2, "0");
    formattedDateTime = `${hours}:${minutes}`;
  } else {
    // Display month and day for other dates
    const month = monthAbbreviations[dateObject.getMonth()];
    const day = dateObject.getDate().toString().padStart(2, "0");
    formattedDateTime = `${day} ${month}`;
  }

  return (
    <Styled.Container $isMyMessage={isMyMessage}>
      <Styled.Time>{formattedDateTime}</Styled.Time>

      <Styled.Message $isMyMessage={isMyMessage}>
        {!isMyMessage && <Styled.Author>{author}</Styled.Author>}
        {text}
      </Styled.Message>
    </Styled.Container>
  );
}
