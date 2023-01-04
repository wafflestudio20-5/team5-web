import React, { useState } from "react";
import FormItem from "../form-item";
import {
  FindPasswordButton,
  FindPasswordForm,
  FindPasswordInfo,
  FindPasswordInfoWrapper,
  FindPasswordTitle,
  FindPasswordTitleWrapper,
  Wrapper,
} from "./find-password.styled";

const FindPassword = () => {
  const [email, setEmail] = useState("");

  const [validated, setValidated] = useState(true);

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    checkFormData(e.target.value);
  };

  const checkFormData = (value: string) => {
    const expression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const result: boolean = expression.test(value);
    setValidated(result);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log("success");
  };
  return (
    <Wrapper>
      <FindPasswordTitleWrapper>
        <FindPasswordTitle>비밀번호 찾기</FindPasswordTitle>
      </FindPasswordTitleWrapper>
      <FindPasswordInfoWrapper>
        <FindPasswordInfo>
          가입 시 등록하신 휴대폰 번호와 이메일을 입력하시면,
        </FindPasswordInfo>
        <FindPasswordInfo>
          휴대폰으로 임시 비밀번호를 전송해 드립니다.
        </FindPasswordInfo>
      </FindPasswordInfoWrapper>
      <FindPasswordForm>
        <FormItem
          name="email"
          label="이메일 주소"
          placeholder="예) kream@kream.co.kr"
          content={email}
          validated={validated}
          handleChangeContent={handleFormData}
        />
      </FindPasswordForm>
      <FindPasswordButton
        disabled={validated && email ? false : true}
        onClick={handleClick}
      >
        이메일 발송하기
      </FindPasswordButton>
    </Wrapper>
  );
};

export default FindPassword;
