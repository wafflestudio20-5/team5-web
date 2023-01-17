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

import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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

  const handleNaverLogin = () => {};

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    const response = login({ email, password });
    // if(response.status)
    navigate("/");
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
        onClick={handleSubmit}
      >
        로그인
      </LoginButton>
      <SignUpWrapper>
        <StyledLink to="/join">
          <SignUpInfo>이메일 가입</SignUpInfo>
        </StyledLink>
        <p style={{ color: "rgb(211 211 211)" }}>|</p>
        <StyledLink to="/login/find_password">
          <SignUpInfo>비밀번호 찾기</SignUpInfo>
        </StyledLink>
      </SignUpWrapper>
      <SocialLoginWrapper>
        <SocialLogin onClick={handleNaverLogin}>
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
