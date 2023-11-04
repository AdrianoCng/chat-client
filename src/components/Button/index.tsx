import * as Styled from "./styles";

interface Props extends React.ComponentProps<"button"> {
  $variant?: "primary" | "secondary" | "tertiary";
}

export default function Button({ $variant = "primary", ...props }: Props) {
  return <Styled.Button {...props} $variant={$variant} />;
}
