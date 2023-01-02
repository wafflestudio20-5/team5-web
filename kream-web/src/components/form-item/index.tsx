import {
  Input,
  InputLabel,
  InputWrapper,
  ValidationInfo,
} from "./form-item.styled";

interface FormItem {
  name: string;
  type?: "password" | "text";
  label: string;
  content: string;
  placeholder?: string;
  validated: boolean;
  handleChangeContent?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormItem: React.FC<FormItem> = ({
  name,
  type,
  label,
  content,
  placeholder,
  validated,
  handleChangeContent,
}: FormItem) => {
  return (
    <InputWrapper>
      <InputLabel validated={validated}>{label}</InputLabel>
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
      ) : type === "password" ? (
        <ValidationInfo>
          영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)
        </ValidationInfo>
      ) : (
        <ValidationInfo>이메일 주소를 정확히 입력해주세요.</ValidationInfo>
      )}
    </InputWrapper>
  );
};

export default FormItem;
