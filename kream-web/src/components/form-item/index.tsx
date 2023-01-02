import { Input, InputLabel, InputWrapper } from "./form-item.styled";

interface FormItem {
  name: string;
  type?: "password" | "text";
  label: string;
  content: string;
  placeholder?: string;
  handleChangeContent?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormItem: React.FC<FormItem> = ({
  name,
  type,
  label,
  content,
  placeholder,
  handleChangeContent,
}: FormItem) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <Input name={name} placeholder={placeholder} value={content} />
    </InputWrapper>
  );
};

export default FormItem;
