import Header from "../../components/header";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
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
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMyInfo } from "../../store/reducers/profileReducer";
import axios from "axios";

const MyPage = () => {
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
          <MyProfileWrapper>
            <ProfileImage alt="profile-image" src={PersonIcon} />
            <InfoWrapper>
              <Nickname>{myInfo?.email.split("@")[0]}</Nickname>
              <Email>{myInfo?.email}</Email>
              <ButtonWrapper>
                <StyledLink to="profile">
                  <StyledButton>프로필 수정</StyledButton>
                </StyledLink>
                <StyledLink to={`/profile/${myInfo?.id}`}>
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
