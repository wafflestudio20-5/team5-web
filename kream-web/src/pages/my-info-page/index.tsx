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
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { getMyInfo } from "../../store/reducers/profileReducer";
import axios from "axios";

const MyInfoPage = () => {
  const { myInfo } = useAppSelector((state) => state.profile);

  const { accessToken } = useAppSelector((state) => state.session);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    } else {
      dispatch(getMyInfo(accessToken))
        .unwrap()
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          if (axios.isAxiosError(e)) {
            console.log(e);
          }
        });
    }
  }, []);
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
              <Nickname>{myInfo?.email.split("@")[0]}</Nickname>
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
                <InfoDetailContent>{myInfo?.email}</InfoDetailContent>
              </InfoDetailContentWrapper>
            </InfoDetailWrapper>
          </InfoWrapper>
          <InfoWrapper>
            <InfoName>개인 정보</InfoName>
            <InfoDetailWrapper>
              <InfoDetailContentWrapper>
                <InfoDetailName>핸드폰 번호</InfoDetailName>
                <InfoDetailContent>{myInfo?.phone_number}</InfoDetailContent>
              </InfoDetailContentWrapper>
            </InfoDetailWrapper>
            <InfoDetailWrapper>
              <InfoDetailContentWrapper>
                <InfoDetailName>신발 사이즈</InfoDetailName>
                <InfoDetailContent>{myInfo?.shoe_size}</InfoDetailContent>
              </InfoDetailContentWrapper>
            </InfoDetailWrapper>
          </InfoWrapper>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export default MyInfoPage;
