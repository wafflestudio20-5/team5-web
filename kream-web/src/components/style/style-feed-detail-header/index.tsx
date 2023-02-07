import React, { useCallback } from "react";
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
import { useAppSelector } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";
import { follow } from "../../../api/style";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface StyleFeedDetailHeaderProps {
  uid: number;
  uimage: string | null;
  nickname: string;
  created: string;
  followed: boolean | string | null;
}

const StyleFeedDetailHeader = ({
  uid,
  uimage,
  nickname,
  created,
  followed,
}: StyleFeedDetailHeaderProps) => {
  require("moment");
  require("moment/locale/ko");

  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { accessToken } = useAppSelector((state) => state.session);

  const { mutate } = useMutation({
    mutationFn: (uid: number) => follow({ uid, accessToken }),
    onSettled: () => {
      queryClient.invalidateQueries(["allStyleFeeds", accessToken]);
    },
  });

  const handleFollow = (uid: number) => {
    if (!accessToken) {
      navigate("/login");
    } else {
      mutate(uid);
    }
  };
  return (
    <Wrapper>
      <UserInfo>
        <Profile
          onClick={() => navigate(`/profile/${uid}`)}
          alt="style-feed-detail-profile"
          src={uimage ? uimage : PersonIcon}
        />
        <SubInfo>
          <Nickname>{nickname}</Nickname>
          <UploadDate>{moment(created).fromNow()}</UploadDate>
        </SubInfo>
      </UserInfo>
      <FollowButtonWrapper>
        <FollowButton onClick={() => mutate(uid)} followed={followed}>
          {followed === true ? "팔로잉" : "팔로우"}
        </FollowButton>
      </FollowButtonWrapper>
    </Wrapper>
  );
};

export default StyleFeedDetailHeader;
