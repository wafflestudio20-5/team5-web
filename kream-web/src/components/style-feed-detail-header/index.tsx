import React from "react";
import {
  FollowButton,
  Nickname,
  Profile,
  SubInfo,
  UploadDate,
  UserInfo,
  Wrapper,
} from "./style-feed-detail-header.styled";

interface StyleFeedDetailHeader {
  profile: string;
  nickname: string;
}

const StyleFeedDetailHeader: React.FC<StyleFeedDetailHeader> = ({
  profile,
  nickname,
}) => {
  return (
    <Wrapper>
      <UserInfo>
        <Profile alt="style-feed-detail-profile" src={profile} />
        <SubInfo>
          <Nickname>{nickname}</Nickname>
          <UploadDate>어제</UploadDate>
        </SubInfo>
      </UserInfo>
      <FollowButton>팔로우</FollowButton>
    </Wrapper>
  );
};

export default StyleFeedDetailHeader;
