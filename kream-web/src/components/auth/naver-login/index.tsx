import { useEffect } from "react";
import { NAVER_REDIRECT_URI } from "../../../libs/urls";
import { SocialLogin, SocialLoginLogo } from "./naver-login.styled";
// import { NaverIcon, NaverIdLogin, NaverLoginBtn, NaverLoginTitle } from "./naver-login.styled";
import naverLogo from "../../../assets/naver_logo.png";

declare global {
  interface Window {
    naver: any;
  }
}

const NaverLogin = ({ naverRef }: any) => {
  //   const naverRef = useRef();
  const { naver } = window;

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
      callbackUrl: NAVER_REDIRECT_URI,
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 50 },
      callbackHandle: true,
    });
    naverLogin.init();
  };

  const handleNaverClick = () => {
    const naverLoginButton = document.getElementById(
      "naverIdLogin_loginButton"
    );
    console.log(naverLoginButton);
    if (naverLoginButton) naverLoginButton.click();
  };

  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return (
    <>
      <SocialLogin onClick={handleNaverClick}>
        <SocialLoginLogo alt="naver-logo" src={naverLogo} />
        <p>네이버로 로그인</p>
      </SocialLogin>
      <div style={{ display: "none" }} ref={naverRef} id="naverIdLogin"></div>
    </>
  );
};

export default NaverLogin;
