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
import React, { useState } from "react";
import FormItem from "../form-item";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
          handleChangeContent={handleFormData}
        />
        <FormItem
          name="password"
          type="password"
          label="이메일 주소"
          content={formData.email}
          handleChangeContent={handleFormData}
        />
      </LoginForm>
      <LoginButton>로그인</LoginButton>
      <SignUpWrapper>
        <StyledLink to="/signup">
          <SignUpInfo>이메일 가입</SignUpInfo>
        </StyledLink>
        <p style={{ color: "rgb(211 211 211)" }}>|</p>
        <SignUpInfo>이메일 찾기</SignUpInfo>
        <p style={{ color: "rgb(211 211 211)" }}>|</p>
        <SignUpInfo>비밀번호 찾기</SignUpInfo>
      </SignUpWrapper>
      <SocialLoginWrapper>
        <SocialLogin>
          <SocialLoginLogo alt="naver-logo" src={naverLogo} />
          <p>네이버로 로그인</p>
        </SocialLogin>
        <SocialLogin>Apple로 로그인</SocialLogin>
      </SocialLoginWrapper>
    </Wrapper>
  );
};

export default Login;
