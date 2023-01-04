import React, { useState } from "react";
import {
  SignUpButton,
  SignUpForm,
  SignUpTitle,
  Wrapper,
} from "./signup.styled";
import FormItem from "../form-item";
import ShoeSizeModal from "../shoes-size-modal";
import { InputChecker, SignUpRequest } from "../../types/signUpRequest";
import { signup } from "../../api/signup";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignUpRequest>({
    email: "",
    password: "",
    shoes: "",
  });

  const { email, password, shoes } = formData;

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
    const repassword = password;
    const response = signup({ email, password, repassword });
    console.log(response);
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
            content={email}
            validated={validatedForm.email}
            handleChangeContent={handleFormData}
          />
          <FormItem
            name="password"
            type="password"
            label="비밀번호"
            placeholder="영문, 숫자, 특수문자 조합 8-16자"
            content={password}
            validated={validatedForm.password}
            handleChangeContent={handleFormData}
          />
          <FormItem
            name="shoes"
            type="shoes"
            label="신발 사이즈"
            placeholder="선택하세요"
            content={shoes}
            handleClickInput={openShoeSizeModal}
          />
        </SignUpForm>
        <SignUpButton
          disabled={
            validatedForm.email &&
            validatedForm.password &&
            email &&
            password &&
            shoes
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
          shoeSize={shoes}
          setShoeSize={setShoeSize}
          closeShoeSizeModal={closeShoeSizeModal}
        />
      ) : null}
    </>
  );
};

export default SignUp;
