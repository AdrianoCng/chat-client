import styled, { css, keyframes } from "styled-components";

const appear = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const InputStyledComponent = styled.input<{
  $fullWidth?: boolean;
  $hasError?: boolean;
}>`
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: all 150ms ease;

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  ${({ $hasError }) =>
    $hasError &&
    css`
      border-color: #ff0000;
    `}

  &:hover:not(:disabled) {
    border-color: #bbb;
  }

  &:focus:not(:disabled) {
    outline: none;
    border-color: #ccc;
    box-shadow: 0 0 5px #ccc;
  }

  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.span`
  color: #ff0000;
  font-size: 1.2rem;
  animation: ${appear} 250ms ease;
`;
