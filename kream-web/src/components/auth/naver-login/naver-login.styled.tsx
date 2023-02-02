import styled from "@emotion/styled";

export const NaverIdLogin = styled.div`
  display: none;
`;

export const NaverLoginBtn = styled.button`
  display: flex;
  align-items: center;
  width: 360px;
  height: 56px;
  background-color: #03c75a;
  border-radius: 6px;
`;

// 로그인 버튼 사용가이드 링크를 들어가면 이미지를 받아 이렇게 적용이 가능하다 !
export const NaverIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  background: url("../../../assets/Login/navericon.png") no-repeat center;
  background-size: 30px;
`;

export const NaverLoginTitle = styled.span`
  margin-left: 90px;

  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;
// color: ${({ theme }) => theme.White};

export const SocialLogin = styled.button`
  position: relative;
  width: 400px;
  height: 50px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  font-size: 16px;
  background-color: white;
  margin-bottom: 2%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SocialLoginLogo = styled.img`
  position: absolute;
  left: 17px;
  width: 20px;
  height: 20px;
`;
