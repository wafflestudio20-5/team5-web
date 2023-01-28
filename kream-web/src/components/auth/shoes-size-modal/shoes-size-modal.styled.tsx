import styled from "@emotion/styled";
import { css } from "@emotion/react";
import React from "react";

interface SizeSelectButton {
  key: number;
  selected: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface ConfirmButton {
  disabled: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const BackgroundWrapper = styled.div`
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 448px;
  height: 428px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  // z-index: 1001;
  // opacity: 1;
`;

export const ModalTitleWrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
`;

export const SizeSelectButtonWrapper = styled.div`
  width: 100%;
  height: 270px;
  overflow: scroll;
  display: flex;
  justify-content: start;
  column-gap: 2%;
  row-gap: 5px;
  flex-wrap: wrap;
  margin-left: 5%;
`;

export const SizeSelectButton = styled.button<SizeSelectButton>`
  width: 30%;
  height: 52px;
  border: 1px solid #d3d3d3;
  border-radius: 15px;
  background-color: white;
  font-size: 14px;

  ${(props) =>
    props.selected &&
    css`
      border: 1px solid black;
      font-weight: 700;
    `}
`;

export const ConfirmButtonWrapper = styled.div`
  width: 100%;
  height: 98px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConfirmButton = styled.button<ConfirmButton>`
  width: 120px;
  height: 42px;
  font-size: 14px;
  background-color: white;
  border: 1px solid #ebebeb;
  border-radius: 15px;
  color: #bcbcbc;

  ${(props) =>
    !props.disabled &&
    css`
      background-color: black;
      cursor: pointer;
      color: white;
      border: 1px solid black;
    `}
`;
