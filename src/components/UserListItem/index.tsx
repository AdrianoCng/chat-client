import { MouseEventHandler } from "react";
import * as Styled from "./styles";
import { Status } from "@/contexts/AuthProvider/hooks/useAuthProviderContext";

interface Props {
  username: string;
  status: Status;
  onClick?: MouseEventHandler<HTMLLIElement>;
}

export function UserListItem({ username, status, onClick }: Props) {
  return (
    <Styled.ListItem onClick={onClick} $status={status}>
      {username}
    </Styled.ListItem>
  );
}
