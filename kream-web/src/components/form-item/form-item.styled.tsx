import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface Input {
  type?: string;
  name: string;
  placeholder?: string;
  value: string | number;
  validated?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2%;
  margin-top: 1%;
  margin-bottom: 1%;
`;

export const InputLabel = styled.p<{ validated?: boolean }>`
  font-size: 13px;
  font-weight: 700;
  margin: 0;
  color: ${(props) =>
    props.validated
      ? "black"
      : props.validated === undefined
      ? "black"
      : "red"};
`;

export const Input = styled.input<Input>`
  width: 400px;
  border: 0px;
  border-bottom: 1px solid #ebebeb;
  outline: none;
  font-size: 15px;
  padding: 8px;
  line-height: 22px;
  padding-left: 0;
  ::placeholder {
    color: #ebebeb;
  }

  ${(props) =>
    !props.validated &&
    props.validated !== undefined &&
    css`
      border-bottom: 1px solid red;
    `}
`;

export const ValidationInfo = styled.p`
  height: 15px;
  font-size: 11px;
  color: red;
  margin: 0;
  padding-top: 1%;
`;

export const InputWithIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const InputIcon = styled.div`
  position: absolute;
  right: 1px;
`;
