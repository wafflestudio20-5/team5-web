import Header from "../../components/header";
import MyPageSidebar from "../../components/my-page-sidebar";
import {
  ButtonWrapper,
  ContentWrapper,
  ImageButtonWrapper,
  PageInfoHeader,
  Nickname,
  ProfileImage,
  ProfileImageWrapper,
  Wrapper,
  InfoName,
  InfoDetailName,
  InfoDetailWrapper,
  InfoDetailContentWrapper,
  InfoDetailContent,
  InfoWrapper,
} from "./my-info-page.styled";
import PersonIcon from "../../assets/person-icon.svg";
import { StyledButton } from "../../utils/StyledComponents";

const MyInfoPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <MyPageSidebar />
        <ContentWrapper>
          <PageInfoHeader>프로필 정보</PageInfoHeader>
          <ProfileImageWrapper>
            <ProfileImage alt="profile-image" src={PersonIcon} />
            <ImageButtonWrapper>
              <Nickname>woojoo1114</Nickname>
              <ButtonWrapper>
                <StyledButton>이미지 변경</StyledButton>
                <StyledButton>삭제</StyledButton>
              </ButtonWrapper>
            </ImageButtonWrapper>
          </ProfileImageWrapper>
          <InfoWrapper>
            <InfoName>로그인 정보</InfoName>
            <InfoDetailWrapper>
              <InfoDetailContentWrapper>
                <InfoDetailName>이메일 주소</InfoDetailName>
                <InfoDetailContent>woojoo1114@naver.com</InfoDetailContent>
              </InfoDetailContentWrapper>
              <StyledButton>변경</StyledButton>
            </InfoDetailWrapper>
            <InfoDetailWrapper>
              <InfoDetailContentWrapper>
                <InfoDetailName>비밀번호</InfoDetailName>
                <InfoDetailContent>●●●●●●●●●●</InfoDetailContent>
              </InfoDetailContentWrapper>
              <StyledButton>변경</StyledButton>
            </InfoDetailWrapper>
          </InfoWrapper>
          <InfoWrapper>
            <InfoName>개인 정보</InfoName>
            <InfoDetailWrapper>
              <InfoDetailContentWrapper>
                <InfoDetailName>이름</InfoDetailName>
                <InfoDetailContent>woojoo1114</InfoDetailContent>
              </InfoDetailContentWrapper>
              <StyledButton>변경</StyledButton>
            </InfoDetailWrapper>
            <InfoDetailWrapper>
              <InfoDetailContentWrapper>
                <InfoDetailName>신발 사이즈</InfoDetailName>
                <InfoDetailContent>260</InfoDetailContent>
              </InfoDetailContentWrapper>
              <StyledButton>변경</StyledButton>
            </InfoDetailWrapper>
          </InfoWrapper>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export default MyInfoPage;
