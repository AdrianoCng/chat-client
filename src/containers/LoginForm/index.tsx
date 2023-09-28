import { useRef } from "react";

import * as Styled from "./styles";

import Button from "@components/Button";
import Input from "@components/Input";
import Label from "@components/Label";
import login_img from "@assets/images/login_img.jpg";

export default function LoginForm() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <Styled.Wrapper>
      <Styled.Img src={login_img} />

      <Styled.Form>
        <Styled.FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input id="username" type="text" ref={usernameRef} />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" ref={passwordRef} />
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
