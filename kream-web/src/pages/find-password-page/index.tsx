import FindPassword from "../../components/find-password";
import Header from "../../components/header";
import { BodyWrapper } from "./find-password-page.styled";

const FindPasswordPage = () => {
  return (
    <>
      <Header />
      <BodyWrapper>
        <FindPassword />
      </BodyWrapper>
    </>
  );
};

export default FindPasswordPage;
