import useLogout from "@/hooks/useLogout";
import * as Styled from "./styles";
import { FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  const [logout] = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <Styled.Sidebar>
      <Styled.Nav></Styled.Nav>
      <Styled.LogoutButton onClick={handleLogout}>
        Logout <FiLogOut />
      </Styled.LogoutButton>
    </Styled.Sidebar>
  );
}
