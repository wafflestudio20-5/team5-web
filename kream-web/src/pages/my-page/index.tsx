import Header from "../../components/header";
import { useAppSelector } from "../../store/hooks";
import {
  ButtonWrapper,
  Email,
  InfoWrapper,
  MyProfileWrapper,
  Nickname,
  ProfileImage,
  ContentWrapper,
  Wrapper,
} from "./my-page.styled";

import PersonIcon from "../../assets/person-icon.svg";

import MyPageSidebar from "../../components/my-page-sidebar";

import { StyledButton, StyledLink } from "../../utils/StyledComponents";

const MyPage = () => {
  const { myInfo } = useAppSelector((state) => state.profile);

  return (
    <>
      <Header />
      <Wrapper>
        <MyPageSidebar />
        <ContentWrapper>
          <MyProfileWrapper>
            <ProfileImage alt="profile-image" src={PersonIcon} />
            <InfoWrapper>
              <Nickname>woojoo1114</Nickname>
              <Email>woojoo1114@naver.com</Email>
              <ButtonWrapper>
                <StyledLink to="profile">
                  <StyledButton>프로필 수정</StyledButton>
                </StyledLink>
                <StyledLink to="/style">
                  <StyledButton>내 스타일</StyledButton>
                </StyledLink>
              </ButtonWrapper>
            </InfoWrapper>
          </MyProfileWrapper>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export default MyPage;
