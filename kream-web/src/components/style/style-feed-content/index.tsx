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
import FollowedIcon from "../../../assets/followed-icon.svg";

import { scrollWithOffset } from "../../../utils/HashLink";
import { StyledLink } from "../../../utils/StyledComponents";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAppSelector } from "../../../store/hooks";
import { like } from "../../../api/style";
import { useNavigate } from "react-router-dom";

interface StyleFeedContentProps {
  id: number;
  uid: number;
  uimage: string | null;
  nickname: string;
  content: string;
  likes: number;
  liked: boolean | string | undefined;
}

const StyleFeedContent = ({
  id,
  uid,
  uimage,
  nickname,
  content,
  likes,
  liked,
}: StyleFeedContentProps) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { accessToken } = useAppSelector((state) => state.session);
  const { mutate } = useMutation({
    mutationFn: (pid: number) => like({ pid, accessToken }),
    onSettled: () => {
      queryClient.invalidateQueries(["allStyleFeeds", accessToken]);
    },
  });

  const handleLike = (id: number) => {
    if (!accessToken) {
      navigate("/login");
    } else {
      mutate(id);
    }
  };
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
          {liked === true ? (
            <LikeIcon
              onClick={() => handleLike(id)}
              alt="like-icon"
              src={FollowedIcon}
            />
          ) : (
            <LikeIcon
              onClick={() => handleLike(id)}
              alt="smile-icon"
              src={SmileIcon}
            />
          )}

          <LikeNum>{likes}</LikeNum>
        </LikeIconWrapper>
      </FeedInfo>
      <StyledHashLink
        key={id}
        to={`/style/details#${id}`}
        scroll={(el) => scrollWithOffset(el)}
      >
        <Content>
          {content.length > 27 ? content.slice(0, 27) + "..." : content}
        </Content>
      </StyledHashLink>
    </Wrapper>
  );
};

export default StyleFeedContent;
