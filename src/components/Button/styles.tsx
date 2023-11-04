import styled, { css } from "styled-components";

const primaryButtonStyles = css`
  background-color: var(--primary);
  color: #fff;
  border: 1px solid var(--primary);
  box-shadow: 0 0 5px rgba(var(--primary-rgb), 0.5);
`;

const secondaryButtonStyles = css`
  border: 1px solid var(--primary);
  color: var(--primary);
  background-color: #fff;
  box-shadow: 0 0 5px rgba(var(--primary-rgb), 0.5);

  &:hover {
    ${primaryButtonStyles}
  }
`;

const tertiaryButtonStyles = css`
  background-color: var(--secondary);
  color: var(--primary);
  font-weight: 500;
  border: 1px solid var(--primary);

  box-shadow: 0 0 5px rgba(var(--primary-rgb), 0.5);
`;

export const Button = styled.button<{
  $variant: "primary" | "secondary" | "tertiary";
}>`
  padding: 10px;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;

  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return primaryButtonStyles;
      case "secondary":
        return secondaryButtonStyles;
      case "tertiary":
        return tertiaryButtonStyles;
    }
  }}
`;
