import React, { useState } from "react";
import {
  SignUpButton,
  SignUpForm,
  SignUpTitle,
  Wrapper,
} from "./signup.styled";
import FormItem from "../form-item";
import ShoeSizeModal from "../shoes-size-modal";
import { InputChecker, SignUpFormType } from "../../types/signUpFormType";

const SignUp = () => {
  const [formData, setFormData] = useState<SignUpFormType>({
    email: "",
    password: "",
    shoes: "",
  });

  const [validatedForm, setValidatedForm] = useState({
    email: true,
    password: true,
  });

  const [modalOpen, setModalOpen] = useState(false);

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

  const openShoeSizeModal = (e: React.MouseEvent<HTMLElement>) => {
    setModalOpen(true);
  };

  const closeShoeSizeModal = () => {
    setModalOpen(false);
  };

  const setShoeSize = (size: number | string) => {
    setFormData({ ...formData, shoes: size });
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log("success");
  };
  return (
    <>
      <Wrapper>
        <SignUpTitle>회원가입</SignUpTitle>
        <SignUpForm>
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
            placeholder="영문, 숫자, 특수문자 조합 8-16자"
            content={formData.password}
            validated={validatedForm.password}
            handleChangeContent={handleFormData}
          />
          <FormItem
            name="shoes"
            type="shoes"
            label="신발 사이즈"
            placeholder="선택하세요"
            content={formData.shoes}
            handleClickInput={openShoeSizeModal}
          />
        </SignUpForm>
        <SignUpButton
          disabled={
            validatedForm.email &&
            validatedForm.password &&
            formData.email &&
            formData.password
              ? false
              : true
          }
          onClick={handleClick}
        >
          가입하기
        </SignUpButton>
      </Wrapper>

      {modalOpen ? (
        <ShoeSizeModal
          shoeSize={formData.shoes}
          setShoeSize={setShoeSize}
          closeShoeSizeModal={closeShoeSizeModal}
        />
      ) : null}
    </>
  );
};

export default SignUp;
