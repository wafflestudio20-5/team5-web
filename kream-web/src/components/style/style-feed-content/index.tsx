import {
  Content,
  FeedInfo,
  LikeIcon,
  LikeIconWrapper,
  LikeNum,
  Profile,
  StyledHashLink,
  UserInfo,
  Username,
  Wrapper,
} from "./style-feed-content.styled";
import SmileIcon from "../../../assets/smile-icon.svg";
import PersonIcon from "../../../assets/person-icon.svg";
import { scrollWithOffset } from "../../../utils/HashLink";
import { StyledLink } from "../../../utils/StyledComponents";

interface StyleFeedContentProps {
  id: number;
  uid: number;
  uimage: string | null;
  nickname: string;
  content: string;
  likes: number;
}

const StyleFeedContent = ({
  id,
  uid,
  uimage,
  nickname,
  content,
  likes,
}: StyleFeedContentProps) => {
  return (
    <Wrapper>
      <FeedInfo>
        <StyledLink to={`/style/users/${uid}`}>
          <UserInfo>
            <Profile
              alt="user-profile-image"
              src={uimage ? uimage : PersonIcon}
            />
            <Username>{nickname}</Username>
          </UserInfo>
        </StyledLink>

        <LikeIconWrapper>
          <LikeIcon alt="like-icon" src={SmileIcon} />
          <LikeNum>{likes}</LikeNum>
        </LikeIconWrapper>
      </FeedInfo>
      <StyledHashLink
        key={id}
        to={`/style/details#${id}`}
        scroll={(el) => scrollWithOffset(el)}
      >
        <Content>{content}</Content>
      </StyledHashLink>
    </Wrapper>
  );
};

export default StyleFeedContent;
