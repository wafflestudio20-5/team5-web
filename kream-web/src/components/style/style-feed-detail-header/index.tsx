import React from "react";
import {
  FollowButton,
  FollowButtonWrapper,
  Nickname,
  Profile,
  SubInfo,
  UploadDate,
  UserInfo,
  Wrapper,
} from "./style-feed-detail-header.styled";
import PersonIcon from "../../../assets/person-icon.svg";
import moment from "moment";

interface StyleFeedDetailHeaderProps {
  uimage: string | null;
  nickname: string;
  created: string;
  followed: boolean | string | null;
}

const StyleFeedDetailHeader = ({
  uimage,
  nickname,
  created,
  followed,
}: StyleFeedDetailHeaderProps) => {
  require("moment");
  require("moment/locale/ko");

  return (
    <Wrapper>
      <UserInfo>
        <Profile
          alt="style-feed-detail-profile"
          src={uimage ? uimage : PersonIcon}
        />
        <SubInfo>
          <Nickname>{nickname}</Nickname>
          <UploadDate>{moment(created).fromNow()}</UploadDate>
        </SubInfo>
      </UserInfo>
      <FollowButtonWrapper>
        <FollowButton followed={followed}>
          {followed === true ? "팔로잉" : "팔로우"}
        </FollowButton>
      </FollowButtonWrapper>
    </Wrapper>
  );
};

export default StyleFeedDetailHeader;
