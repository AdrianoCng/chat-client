import styled, { css } from "styled-components";
import { tablet } from "@/styles/breakpoints";
import Button from "@/components/Button";

export const Sidebar = styled.aside`
  background-color: var(--primary);
  flex-grow: 1;
  gap: 20px;
  padding: 20px;
  color: white;
  min-width: 200px;
  max-width: 350px;
  display: flex;
  flex-direction: column;

  ${tablet(css`
    display: none;
  `)}
`;

export const Nav = styled.nav`
  flex-grow: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LogoutButton = styled(Button)`
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  ${css`
    background-color: var(--secondary);
    color: var(--primary);
    font-weight: 500;
    border: 1px solid var(--primary);
    box-shadow: 0 0 5px rgba(var(--primary-rgb), 0.5);

    &:hover {
      filter: brightness(1.05);
    }
  `}
`;

export const UserList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
