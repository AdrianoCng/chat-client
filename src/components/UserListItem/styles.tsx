import { Status } from "@/contexts/AuthProvider/hooks/useAuthProviderContext";
import styled, { css } from "styled-components";

const onlineStyles = css`
  &:before {
    background-color: green;
  }
`;

const awayStyles = css`
  &:before {
    background-color: red;
  }
`;

const offlineStyles = css`
  opacity: 0.5;

  &:before {
    background-color: grey;
  }

  &:hover {
    cursor: default;
    background-color: initial;
    scale: none;
  }
`;

export const ListItem = styled.li<{ $status: Status }>`
  color: white;
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 500;
  display: flex;
  gap: 10px;
  align-items: center;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    scale: 1.01;
  }

  &:before {
    content: "";
    border-radius: 20%;
    width: 8px;
    height: 8px;
  }

  ${({ $status }) => ($status === "online" ? onlineStyles : $status === "offline" ? offlineStyles : awayStyles)}
`;
