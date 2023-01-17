import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface FindPasswordButton {
  disabled: boolean;
  handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Wrapper = styled.div`
  width: 400px;
  //   height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-top: 2%;
  padding-bottom: 6%;
`;

export const FindPasswordTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  //   flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 3%;
  border-bottom: 2px solid black;
`;

export const FindPasswordTitle = styled.h2`
  font-size: 32px;
`;

export const FindPasswordInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-top: 10%;
  margin-bottom: 8%;
`;

export const FindPasswordInfo = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const FindPasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 5%;
`;

export const FindPasswordButton = styled.button<FindPasswordButton>`
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
