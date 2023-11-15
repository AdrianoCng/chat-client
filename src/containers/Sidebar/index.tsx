import useLogout from "@/hooks/useLogout";
import * as Styled from "./styles";
import { FiLogOut } from "react-icons/fi";
import useSocketContext from "@/contexts/SocketProvider/hooks/useSocketContext";
import { UserListItem } from "@/components/UserListItem";

export default function Sidebar() {
  const [logout] = useLogout();
  const { usersList } = useSocketContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <Styled.Sidebar>
      <Styled.Nav>
        <Styled.UserList>
          {usersList.map(({ username, status }) => (
            <UserListItem username={username} status={status} />
          ))}
        </Styled.UserList>
      </Styled.Nav>

      <Styled.LogoutButton onClick={handleLogout}>
        Logout <FiLogOut />
      </Styled.LogoutButton>
    </Styled.Sidebar>
  );
}
