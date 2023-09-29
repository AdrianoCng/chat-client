import { tablet } from "@/styles/breakpoints";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  margin: 40px 80px;
  border-radius: 20px;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  font-size: 1.6rem;
  background-color: #fff;
`;

export const Sidebar = styled.div`
  background-color: var(--primary);
  flex-grow: 1;
  padding: 20px;
  color: white;
  min-width: 200px;

  ${tablet(css`
    display: none;
  `)}
`;

export const Main = styled.div`
  flex-grow: 5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ChatContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
