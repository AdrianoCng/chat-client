import styled from "styled-components";
import { Button } from "@/components/Button/styles";
import { InputWrapper } from "@/components/Input/styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
  align-items: center;

  ${InputWrapper} {
    flex-grow: 1;
  }

  ${Button} {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;
