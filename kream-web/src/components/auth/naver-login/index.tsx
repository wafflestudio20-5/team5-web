import { useEffect } from "react";
import { NAVER_REDIRECT_URI } from "../../../libs/urls";
// import { NaverIcon, NaverIdLogin, NaverLoginBtn, NaverLoginTitle } from "./naver-login.styled";

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
      loginButton: { color: "green", type: 3, height: 58 },
      callbackHandle: true,
    });
    naverLogin.init();
  };

  // 네이버 소셜 로그인 (네아로) 는 URL 에 엑세스 토큰이 붙어서 전달된다.
  // 우선 아래와 같이 토큰을 추출 할 수 있으며,
  // 3부에 작성 될 Redirect 페이지를 통해 빠르고, 깨끗하게 처리가 가능하다.

  //   const userAccessToken = () => {
  //     window.location.href.includes("access_token") && getToken();
  //   };

  //   const getToken = () => {
  //     const token = window.location.href.split("=")[1].split("&")[0];
  //     console.log(token);
  //     // console.log, alert 창을 통해 토큰이 잘 추출 되는지 확인하자!

  //     // 이후 로컬 스토리지 또는 state에 저장하여 사용하자!
  //     // localStorage.setItem('access_token', token)
  //     // setGetToken(token)
  //   };

  // 화면 첫 렌더링이후 바로 실행하기 위해 useEffect 를 사용하였다.
  useEffect(() => {
    initializeNaverLogin();
    // userAccessToken();
  }, []);

  return (
    <>
      {/* <NaverIdLogin ref={naverRef} id="naverIdLogin" />
      <NaverLoginBtn onClick={handleNaverLogin}>
        <NaverIcon alt="navericon" />
        <NaverLoginTitle>네이버로 로그인</NaverLoginTitle>
      </NaverLoginBtn> */}
      <div ref={naverRef} id="naverIdLogin"></div>
    </>
  );
};

export default NaverLogin;
