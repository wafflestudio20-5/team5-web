import {
  LoginForm,
  Logo,
  Wrapper,
  LoginButton,
  SignUpWrapper,
  SignUpInfo,
  SocialLoginWrapper,
  SocialLogin,
  SocialLoginLogo,
} from "./login.styled";
import kreamFullLogo from "../../../assets/kream_full_logo.png";

import googleLogo from "../../../assets/google_logo.png";

import React, { useState } from "react";
import FormItem from "../form-item";
import { InputChecker } from "../../../types/signUpRequest";

import { useNavigate } from "react-router-dom";

import NaverLogin from "../naver-login";

import { login } from "../../../store/reducers/sessionReducer";
import { StyledLink } from "../../../utils/StyledComponents";
import { useAppDispatch } from "../../../store/hooks";
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  // const naverRef = useRef();
  // const googleRef = useRef();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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

  // const handleNaverLogin = () => {
  //   naverRef.current.children[0].click();
  // };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    const response = dispatch(login({ email, password }));
    console.log(response);
    navigate("/");
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (token) =>
      navigate(`/login/google_login?access_token=${token.access_token}`),
  });

  return (
    <Wrapper>
      <Logo alt="kream-full-logo" src={kreamFullLogo} />
      <LoginForm>
        <FormItem
          name="email"
          label="????????? ??????"
          placeholder="???) kream@kream.co.kr"
          content={formData.email}
          validated={validatedForm.email}
          handleChangeContent={handleFormData}
        />
        <FormItem
          name="password"
          type="password"
          label="????????????"
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
        ?????????
      </LoginButton>
      <SignUpWrapper>
        <StyledLink to="/join">
          <SignUpInfo>????????? ??????</SignUpInfo>
        </StyledLink>
        <p style={{ color: "rgb(211 211 211)" }}>|</p>
        <StyledLink to="/login/find_password">
          <SignUpInfo>???????????? ??????</SignUpInfo>
        </StyledLink>
      </SignUpWrapper>
      <SocialLoginWrapper>
        <NaverLogin />
        <SocialLogin onClick={() => googleLogin()}>
          <SocialLoginLogo alt="google-logo" src={googleLogo} />
          <p>Google??? ?????????</p>
        </SocialLogin>
      </SocialLoginWrapper>
    </Wrapper>
  );
};

export default Login;
