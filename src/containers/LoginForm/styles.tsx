import styled, { css } from "styled-components";

import { tablet } from "@/styles/breakpoints";

export const Wrapper = styled.div`
  display: flex;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -25%);
  overflow: hidden;
`;

export const Img = styled.img`
  width: 350px;
  aspect-ratio: 1;

  ${tablet(css`
    display: none;
  `)}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px;
  gap: 10px;
  justify-content: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormLink = styled.a`
  color: var(--primary);
  font-size: 1.4rem;
  margin-bottom: 20px;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
