import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

interface LoginButton {
  disabled: boolean;
  handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6%;
  padding-bottom: 6%;
`;

export const Logo = styled.img`
  width: 250px;
  height: 56px;
  margin-bottom: 40px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 5%;
`;

export const LoginButton = styled.button<LoginButton>`
  width: 400px;
  height: 52px;
  border: 0px;
  border-radius: 10px;
  background-color: #ebebeb;
  color: white;
  font-size: 16px;
  margin-top: 2%;

  ${(props) =>
    !props.disabled &&
    css`
      background-color: black;
      cursor: pointer;
    `}
`;

export const SignUpWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 8%;
`;

export const SignUpInfo = styled.p`
  font-size: 13px;
  color: black;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const SocialLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2%;
`;

export const SocialLogin = styled.button`
  position: relative;
  width: 400px;
  height: 50px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  font-size: 16px;
  background-color: white;
  margin-bottom: 2%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SocialLoginLogo = styled.img`
  position: absolute;
  left: 10px;
  width: 28px;
  height: 28px;
`;
