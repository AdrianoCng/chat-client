import styled from "styled-components";

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

export const Main = styled.main`
  flex-grow: 5;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
