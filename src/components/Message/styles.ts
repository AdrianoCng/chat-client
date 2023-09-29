import styled, { css, keyframes } from "styled-components";

const tailWidth = 15;

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

export const Container = styled.div<{ $isMyMessage: boolean }>`
  display: flex;
  align-items: end;
  gap: ${tailWidth}px;
  animation: ${pop} 350ms ease;

  ${({ $isMyMessage }) =>
    $isMyMessage &&
    css`
      flex-direction: row-reverse;
    `}
`;

export const Message = styled.div<{ $isMyMessage: boolean }>`
  position: relative;
  padding: 15px;
  border-radius: 20px;
  width: fit-content;
  max-width: 500px;
  display: flex;
  flex-direction: column;

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
    width: calc(${tailWidth}px + 10px);
    bottom: 0;
    background: inherit;
    height: 15px;
    ${({ $isMyMessage }) =>
      $isMyMessage
        ? css`
            left: calc(100% - 18px);
          `
        : css`
            right: calc(100% - 18px);
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
        border-bottom-left-radius: 15px;
    `
        : `
        right: calc(100% - 1px);
        border-bottom-right-radius: 15px;
        `}
  }
`;

export const Author = styled.span`
  font-size: 1rem;
  opacity: 0.5;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  max-width: 80px;
  overflow: hidden;
`;

export const Time = styled.span`
  font-size: 1rem;
  opacity: 0.5;
  width: 35px;
`;
