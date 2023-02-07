import React from "react";
import {
  Input,
  InputIcon,
  InputLabel,
  InputWithIcon,
  InputWrapper,
  ValidationInfo,
} from "./form-item.styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface FormItemProps {
  name: string;
  type?: string;
  label: string;
  content: string | number;
  placeholder?: string;
  validated?: boolean;
  handleChangeContent?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickInput?: (e: React.MouseEvent<HTMLElement>) => void;
}

const FormItem = ({
  name,
  type,
  label,
  content,
  placeholder,
  validated,
  handleChangeContent,
  handleClickInput,
}: FormItemProps) => {
  return (
    <InputWrapper>
      <InputLabel validated={validated}>{label}</InputLabel>
      {type === "shoes" ? (
        <InputWithIcon>
          <Input
            type={type}
            name={name}
            placeholder={placeholder}
            value={content}
            readOnly
            onClick={handleClickInput}
          />
          <InputIcon>
            <ArrowForwardIosIcon sx={{ height: "15px" }} />
          </InputIcon>
        </InputWithIcon>
      ) : (
        <>
          <Input
            type={type}
            name={name}
            placeholder={placeholder}
            value={content}
            validated={validated}
            onChange={handleChangeContent}
          />
          {validated ? (
            <div style={{ height: "15px", paddingTop: "1%" }}></div>
          ) : name === "password" ? (
            <ValidationInfo>
              영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)
            </ValidationInfo>
          ) : name === "email" ? (
            <ValidationInfo>이메일 주소를 정확히 입력해주세요.</ValidationInfo>
          ) : (
            <ValidationInfo>비밀번호가 일치하지 않습니다.</ValidationInfo>
          )}
        </>
      )}
    </InputWrapper>
  );
};

export default FormItem;
