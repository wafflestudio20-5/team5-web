import {
  Logo,
  OtherFont,
  OtherPage,
  PagePart,
  StyledLink,
  UserFont,
  UserPage,
  Wrapper,
} from "./header.styled";

import kreamLogo from "../../static/kream_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <UserPage>
        <UserFont>마이 페이지</UserFont>
        <StyledLink to="/login">
          <UserFont>로그인</UserFont>
        </StyledLink>
      </UserPage>
      <OtherPage>
        <Link to="/">
          <Logo alt="kream-logo" src={kreamLogo} />
        </Link>
        <PagePart>
          <StyledLink to="/style">
            <OtherFont>STYLE</OtherFont>
          </StyledLink>
          <StyledLink to="/shop">
            <OtherFont>SHOP</OtherFont>
          </StyledLink>
        </PagePart>
      </OtherPage>
    </Wrapper>
  );
};

export default Header;
