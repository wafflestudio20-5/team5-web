import { useState } from "react";
import Header from "../../components/header";
import ShoeSizeModal from "../../components/shoes-size-modal";
import SignUp from "../../components/signup";
// import { Wrapper } from "./signup-page.styled";

const SignUpPage = () => {
  return (
    <>
      <Header />
      <SignUp />
    </>
  );
};
export default SignUpPage;
