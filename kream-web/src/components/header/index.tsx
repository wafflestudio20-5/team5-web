import {
  Logo,
  OtherFont,
  OtherPage,
  PagePart,
  UserFont,
  UserPage,
  Wrapper,
} from "./header.styled";

import kreamLogo from "../../assets/kream_logo.png";
import { Link } from "react-router-dom";
import { StyledLink } from "../../utils/StyledComponents";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { sessionActions } from "../../store/reducers/sessionReducer";

const Header = () => {
  const { accessToken } = useAppSelector((state) => state.session);
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <UserPage>
        <UserFont>마이 페이지</UserFont>
        {accessToken ? (
          <button
            onClick={() => dispatch(sessionActions.logout())}
            style={{ border: "0", margin: "0", backgroundColor: "transparent" }}
          >
            <UserFont>로그아웃</UserFont>
          </button>
        ) : (
          <StyledLink to="/login">
            <UserFont>로그인</UserFont>
          </StyledLink>
        )}
      </UserPage>
      <OtherPage>
        <Link to="/">
          <Logo alt="kream-logo" src={kreamLogo} />
        </Link>
        <PagePart>
          <StyledLink to="/">
            <OtherFont>Home</OtherFont>
          </StyledLink>
          <StyledLink to="/style">
            <OtherFont>STYLE</OtherFont>
          </StyledLink>
          <StyledLink to="/shop">
            <OtherFont>SHOP</OtherFont>
          </StyledLink>
          <StyledLink to="/my">
            <OtherFont>MY</OtherFont>
          </StyledLink>
        </PagePart>
      </OtherPage>
    </Wrapper>
  );
};

export default Header;
