import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2%;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const InputLabel = styled.p`
  font-size: 13px;
  font-weight: 700;
  margin: 0;
`;

export const Input = styled.input`
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
`;
