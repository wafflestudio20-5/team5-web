import {
  LoginForm,
  Logo,
  Wrapper,
  LoginButton,
  SignUpWrapper,
  SignUpInfo,
  StyledLink,
  SocialLoginWrapper,
  SocialLogin,
  SocialLoginLogo,
} from "./login.styled";
import kreamFullLogo from "../../static/kream_full_logo.png";
import naverLogo from "../../static/naver_logo.png";
import googleLogo from "../../static/google_logo.png";

import React, { useState } from "react";
import FormItem from "../form-item";
import { InputChecker } from "../../types/signUpRequest";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [validatedForm, setValidatedForm] = useState({
    email: true,
    password: true,
  });

  const checkFormData = (props: InputChecker) => {
    const { name, value } = props;
    let expression;
    if (name === "email") {
      expression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    } else {
      expression =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,16}$/i;
    }
    const result: boolean = expression.test(value);
    setValidatedForm({ ...validatedForm, [name]: result });
  };

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    checkFormData({ name, value });
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log("success");
  };

  return (
    <Wrapper>
      <Logo alt="kream-full-logo" src={kreamFullLogo} />
      <LoginForm>
        <FormItem
          name="email"
          label="이메일 주소"
          placeholder="예) kream@kream.co.kr"
          content={formData.email}
          validated={validatedForm.email}
          handleChangeContent={handleFormData}
        />
        <FormItem
          name="password"
          type="password"
          label="비밀번호"
          content={formData.password}
          validated={validatedForm.password}
          handleChangeContent={handleFormData}
        />
      </LoginForm>
      <LoginButton
        disabled={
          validatedForm.email &&
          validatedForm.password &&
          formData.email &&
          formData.password
            ? false
            : true
        }
        onClick={handleClick}
      >
        로그인
      </LoginButton>
      <SignUpWrapper>
        <StyledLink to="/signup">
          <SignUpInfo>이메일 가입</SignUpInfo>
        </StyledLink>
        <p style={{ color: "rgb(211 211 211)" }}>|</p>
        <SignUpInfo>비밀번호 찾기</SignUpInfo>
      </SignUpWrapper>
      <SocialLoginWrapper>
        <SocialLogin>
          <SocialLoginLogo alt="naver-logo" src={naverLogo} />
          <p>네이버로 로그인</p>
        </SocialLogin>
        <SocialLogin>
          <SocialLoginLogo alt="google-logo" src={googleLogo} />
          <p>Google로 로그인</p>
        </SocialLogin>
      </SocialLoginWrapper>
    </Wrapper>
  );
};

export default Login;
