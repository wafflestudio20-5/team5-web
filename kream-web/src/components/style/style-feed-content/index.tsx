import {
  Content,
  EachIcon,
  Icons,
  Profile,
  UserInfo,
  Username,
  Wrapper,
} from "./style-feed-content.styled";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

interface StyleFeedContent {
  profile: string;
  nickname: string;
  content: string;
}

const StyleFeedContent: React.FC<StyleFeedContent> = ({
  profile,
  nickname,
  content,
}: StyleFeedContent) => {
  return (
    <Wrapper>
      <UserInfo>
        <Profile alt="user-profile" src={profile} />
        <Username>{nickname}</Username>
      </UserInfo>
      <Content>{content}</Content>
      <Icons>
        <EachIcon>
          <SentimentSatisfiedAltIcon sx={{ color: "silver" }} />
          <div style={{ color: "silver" }}>10</div>
        </EachIcon>
        <EachIcon>
          <ChatBubbleOutlineIcon sx={{ color: "silver" }} />
          <div style={{ color: "silver" }}>10</div>
        </EachIcon>
      </Icons>
    </Wrapper>
  );
};

export default StyleFeedContent;
