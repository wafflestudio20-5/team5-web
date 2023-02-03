import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  fetchAllComments,
  likeComment,
  likeReply,
  postComment,
} from "../../../api/style";
import { useAppSelector } from "../../../store/hooks";
import { StyleFeed, StyleFeedComment } from "../../../types/style";
import {
  BackgroundWrapper,
  CommentModalWrapper,
  FeedComment,
  Content,
  ContentHeader,
  ContentWrapper,
  Date,
  FeedCommentHeader,
  FeedCommentHeaderTitle,
  Nickname,
  Profile,
  Wrapper,
  FeedCommentInputWrapper,
  FeedCommentInput,
  FeedCommentWrapper,
  ProfileWrapper,
  FeedCommentWithLikeWrapper,
  FeedCommentLikeWrapper,
  FeedCommentLike,
  WriteReply,
  CommentLike,
  ContentInfo,
  FeedCommentInputButton,
} from "./style-feed-comment.styled";
import PersonIcon from "../../../assets/person-icon.svg";
import SmileIcon from "../../../assets/smile-icon.svg";
import FollowedIcon from "../../../assets/followed-icon.svg";
import moment from "moment";
import CloseIcon from "@mui/icons-material/Close";
import React, { Dispatch, SetStateAction, useState } from "react";

interface StyleFeedCommentModalProps {
  id: number;
  feed: StyleFeed;
  handleCommentModal: Dispatch<SetStateAction<number>>;
}

interface FetchedData {
  previous: string | null;
  next: string | null;
  results: StyleFeedComment[];
}

interface PostComment {
  id: number;
  content: string;
}

const StyleFeedCommentModal = ({
  id,
  feed,
  handleCommentModal,
}: StyleFeedCommentModalProps) => {
  require("moment");
  require("moment/locale/ko");
  const queryClient = useQueryClient();

  const { accessToken } = useAppSelector((state) => state.session);

  const { data } = useQuery<StyleFeedComment[], AxiosError>({
    queryKey: ["allStyleComments", id, accessToken],
    queryFn: () => fetchAllComments({ id, accessToken }),
    staleTime: 5000,
  });

  const [content, setContent] = useState("");

  const requestPostComment = useMutation({
    mutationFn: ({ id, content }: PostComment) =>
      postComment({ id, accessToken, content }),
    onSettled: () => {
      queryClient.invalidateQueries(["allStyleComments", id, accessToken]);
    },
  });

  const requestCommentLike = useMutation({
    mutationFn: (cid: number) => likeComment({ cid, accessToken }),
    onSettled: () => {
      queryClient.invalidateQueries(["allStyleComments", id, accessToken]);
    },
  });

  const requestReplyLike = useMutation({
    mutationFn: (cid: number) => likeReply({ cid, accessToken }),
    onSettled: () => {
      queryClient.invalidateQueries(["allStyleComments", id, accessToken]);
    },
  });

  const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleCommentButtonClick = () => {
    requestPostComment.mutate({ id, content });
    setContent("");
  };
  return (
    <BackgroundWrapper onClick={() => handleCommentModal(0)}>
      <CommentModalWrapper onClick={(e) => e.stopPropagation()}>
        <Wrapper>
          <FeedCommentHeader>
            <CloseIcon
              onClick={() => handleCommentModal(0)}
              sx={{
                width: "24px",
                height: "24px",
                mr: "7px",
                cursor: "pointer",
              }}
            />
            <FeedCommentHeaderTitle>댓글</FeedCommentHeaderTitle>
          </FeedCommentHeader>
          <FeedComment>
            <ProfileWrapper>
              <Profile
                alt="feed-profile"
                src={feed.created_by.image ? feed.created_by.image : PersonIcon}
              />
            </ProfileWrapper>
            <ContentWrapper>
              <ContentHeader>
                <p style={{ fontSize: "14px", margin: "0" }}>
                  <strong>{feed.created_by.profile_name}</strong> {feed.content}
                </p>
              </ContentHeader>
              <Date>{moment(feed.created_at).fromNow()}</Date>
            </ContentWrapper>
          </FeedComment>
          <FeedCommentInputWrapper>
            <FeedCommentInput
              onChange={handleComment}
              value={content}
              placeholder="댓글을 입력하세요"
            />
            {content.length > 0 ? (
              <FeedCommentInputButton onClick={handleCommentButtonClick}>
                등록
              </FeedCommentInputButton>
            ) : null}
          </FeedCommentInputWrapper>
          <FeedCommentWrapper>
            {data?.map((comment, i) => (
              <FeedCommentWithLikeWrapper key={comment.id}>
                <FeedComment>
                  <Profile
                    alt="comment-profile"
                    src={
                      comment.created_by.image
                        ? comment.created_by.image
                        : PersonIcon
                    }
                  />
                  <ContentWrapper>
                    <ContentHeader>
                      <Nickname>{comment.created_by.profile_name}</Nickname>
                      <Content>{comment.content}</Content>
                    </ContentHeader>
                    <ContentInfo>
                      <Date>{moment(comment.created_at).fromNow()}</Date>
                      {comment.liked ? (
                        <CommentLike>
                          • 공감 <strong>{comment.num_likes}</strong>개
                        </CommentLike>
                      ) : null}
                      <WriteReply>답글쓰기</WriteReply>
                    </ContentInfo>
                  </ContentWrapper>
                </FeedComment>
                <FeedCommentLikeWrapper>
                  <FeedCommentLike
                    onClick={() => requestCommentLike.mutate(comment.id)}
                    alt="comment-like"
                    src={comment.liked ? FollowedIcon : SmileIcon}
                  />
                </FeedCommentLikeWrapper>
              </FeedCommentWithLikeWrapper>
            ))}
          </FeedCommentWrapper>
        </Wrapper>
      </CommentModalWrapper>
    </BackgroundWrapper>
  );
};

export default StyleFeedCommentModal;
