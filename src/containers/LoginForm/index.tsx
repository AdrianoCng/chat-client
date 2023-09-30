import { FormEventHandler, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Styled from "./styles";
import Button from "@components/Button";
import Input from "@components/Input";
import Label from "@components/Label";
import login_img from "@assets/images/login_img.jpg";
import useLogin from "@/hooks/useLogin";

export default function LoginForm() {
  const navigate = useNavigate();
  const [login] = useLogin();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [formErrors, setformErrors] = useState([
    {
      field: "",
      error: "",
    },
  ]);

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const errors = errorsResult(username, password);

    if (errors.length > 0) {
      setformErrors(errors);
      return;
    }

    setformErrors([]);

    login(
      { username: username!, password: password! },
      {
        onSuccess() {
          navigate("/chat");
        },
        onError() {
          setformErrors([
            {
              field: "password",
              error: "Invalid username or password.",
            },
          ]);
        },
      }
    );
  };

  return (
    <Styled.Wrapper>
      <Styled.Img src={login_img} />

      <Styled.Form onSubmit={handleOnSubmit}>
        <Styled.FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            errorMessage={
              formErrors.find((err) => err.field === "username")?.error
            }
            ref={usernameRef}
          />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            errorMessage={
              formErrors.find((err) => err.field === "password")?.error
            }
            ref={passwordRef}
          />
        </Styled.FormGroup>
        <Styled.FormLink href="#">Forgot Password?</Styled.FormLink>
        <Styled.ButtonsGroup>
          <Button type="button" $variant="secondary">
            Sign up
          </Button>
          <Button type="submit" $variant="primary">
            Log in
          </Button>
        </Styled.ButtonsGroup>
      </Styled.Form>
    </Styled.Wrapper>
  );
}

function errorsResult(username?: string, password?: string) {
  const errors = [];

  if (!username) {
    errors.push({
      field: "username",
      error: "Username is required.",
    });
  }

  if (!password) {
    errors.push({
      field: "password",
      error: "Password is required.",
    });
  } else {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!password.match(passwordRegex)) {
      errors.push({
        field: "password",
        error: "Invalid username or password.",
      });
    }
  }

  return errors;
}
