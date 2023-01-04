import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface SignUpButton {
  disabled: boolean;
  handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Wrapper = styled.div`
  width: 100%;
  //   height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2%;
  padding-bottom: 6%;
`;

export const SignUpTitle = styled.h2`
  font-size: 32px;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 5%;
`;

export const SignUpButton = styled.button<SignUpButton>`
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
