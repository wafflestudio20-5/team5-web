import {
  Content,
  EachIcon,
  Icons,
  Profile,
  UserInfo,
  Username,
  Wrapper,
} from "./style-feed-detail.styled";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

interface StyleFeedDetail {
  profile: string;
  nickname: string;
  content: string;
}

const StyleFeedDetail: React.FC<StyleFeedDetail> = ({
  profile,
  nickname,
  content,
}: StyleFeedDetail) => {
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

export default StyleFeedDetail;
