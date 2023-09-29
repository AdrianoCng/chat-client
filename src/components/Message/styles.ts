import styled, { css, keyframes } from "styled-components";

const tailWidth = 20;

const pop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px)
  }

  50% {
    transform: translateY(-2px)
  }

  100% {
    opacity: 1;
    transform: translateY(0)
  }
`;

export const Message = styled.div<{ $isMyMessage: boolean }>`
  position: relative;
  padding: 15px;
  border-radius: 20px;
  width: fit-content;
  max-width: 500px;
  animation: ${pop} 350ms ease;

  ${({ $isMyMessage }) =>
    $isMyMessage
      ? css`
          background-color: var(--primary);
          color: #fff;
          margin-left: auto;
        `
      : css`
          background-color: #eee;
          margin-right: auto;
        `}

  &::before {
    content: "";
    position: absolute;
    width: calc(${tailWidth}px + 15px);
    bottom: 0;
    background: inherit;
    height: 20px;

    ${({ $isMyMessage }) =>
      $isMyMessage
        ? css`
            left: calc(100% - 20px);
          `
        : css`
            right: calc(100% - 20px);
          `}
  }

  &::after {
    content: "";
    position: absolute;
    width: ${tailWidth}px;
    top: 0;
    background-color: #fff;
    height: 100%;

    ${({ $isMyMessage }) =>
      $isMyMessage
        ? `
        left: calc(100% - 1px);
        border-bottom-left-radius: 20px;
    `
        : `
        right: calc(100% - 1px);
        border-bottom-right-radius: 20px;
        `}
  }
`;
