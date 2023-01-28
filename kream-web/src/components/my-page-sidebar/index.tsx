import { StyledLink } from "../../utils/StyledComponents";
import {
  InfoFont,
  InfoListFont,
  MyPageFont,
  SideBarWrapper,
} from "./my-page-sidebar.styled";

const MyPageSidebar = () => {
  return (
    <SideBarWrapper>
      <StyledLink to="/my">
        <MyPageFont>마이 페이지</MyPageFont>
      </StyledLink>
      <InfoFont>쇼핑 정보</InfoFont>
      <InfoListFont>구매 내역</InfoListFont>
      <InfoListFont>판매 내역</InfoListFont>
      <InfoListFont>관심 상품 </InfoListFont>
      <InfoFont>내 정보</InfoFont>
      <StyledLink to="/my/profile">
        <InfoListFont>프로필 정보</InfoListFont>
      </StyledLink>
    </SideBarWrapper>
  );
};

export default MyPageSidebar;
