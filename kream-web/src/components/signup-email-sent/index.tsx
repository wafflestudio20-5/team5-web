import {
  EmailSentMessage,
  LoginPageButton,
  Wrapper,
} from "./signup-email-sent.styled";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";
const SignUpEmailSent = () => {
  return (
    <Wrapper>
      <MailOutlineIcon
        sx={{ width: "200px", height: "200px", mt: "5%", color: "black" }}
      />
      <EmailSentMessage>이메일 전송이 완료되었습니다!</EmailSentMessage>
      <Link to="/login">
        <LoginPageButton>로그인 페이지로 이동</LoginPageButton>
      </Link>
    </Wrapper>
  );
};

export default SignUpEmailSent;
