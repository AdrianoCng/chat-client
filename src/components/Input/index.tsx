import * as Styled from "./styles";
import React, { forwardRef } from "react";

interface Props extends React.ComponentProps<"input"> {
  fullWidth?: boolean;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ fullWidth, errorMessage, ...props }, ref) => {
    return (
      <Styled.InputWrapper>
        <Styled.InputStyledComponent
          $fullWidth={fullWidth}
          $hasError={!!errorMessage}
          ref={ref}
          {...props}
        />

        {errorMessage ? (
          <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
        ) : null}
      </Styled.InputWrapper>
    );
  }
);

export default Input;
