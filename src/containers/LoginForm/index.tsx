import { FormEventHandler, useRef } from "react";
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

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) {
      return;
    }

    login(
      { username, password },
      {
        onSuccess() {
          navigate("/chat");
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
          <Input id="username" type="text" required ref={usernameRef} />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required ref={passwordRef} />
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
