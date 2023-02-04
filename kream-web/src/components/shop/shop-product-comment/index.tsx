import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  fetchAllComments,
  likeComment,
  likeReply,
  postComment,
} from "../../../api/style";
import { useAppSelector } from "../../../store/hooks";
import { StyleFeedComment } from "../../../types/style";
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
} from "./shop-product-comment.styled";
import PersonIcon from "../../../assets/person-icon.svg";
import SmileIcon from "../../../assets/smile-icon.svg";
import FollowedIcon from "../../../assets/followed-icon.svg";
import moment from "moment";
import CloseIcon from "@mui/icons-material/Close";
import React, { Dispatch, SetStateAction, useState } from "react";
import { shopProduct } from "../../../types/shop";
import {
  fetchShopComment,
  likeShopComment,
  likeShopReply,
  postShopComment,
} from "../../../api/shop";

interface ShopProductCommentModalProps {
  id: string | undefined;
  product: shopProduct | undefined;
  handleCommentModal: Dispatch<SetStateAction<boolean>>;
}

interface FetchedData {
  previous: string | null;
  next: string | null;
  results: StyleFeedComment[];
}

interface PostComment {
  id: string | undefined;
  content: string;
}

const ShopProductCommentModal = ({
  id,
  product,
  handleCommentModal,
}: ShopProductCommentModalProps) => {
  require("moment");
  require("moment/locale/ko");
  const queryClient = useQueryClient();

  const { accessToken } = useAppSelector((state) => state.session);

  const { data } = useQuery<FetchedData, AxiosError>({
    queryKey: ["shopProductComment", id, accessToken],
    queryFn: () => fetchShopComment({ id, accessToken }),
    staleTime: 5000,
  });

  const [content, setContent] = useState("");

  const requestPostComment = useMutation({
    mutationFn: ({ id, content }: PostComment) =>
      postShopComment({ id, accessToken, content }),
    onSettled: () => {
      queryClient.invalidateQueries(["shopProductComment", id, accessToken]);
    },
  });

  const requestCommentLike = useMutation({
    mutationFn: (cid: number) => likeShopComment({ cid, accessToken }),
    onSettled: () => {
      queryClient.invalidateQueries(["shopProductComment", id, accessToken]);
    },
  });

  const requestReplyLike = useMutation({
    mutationFn: (cid: number) => likeShopReply({ cid, accessToken }),
    onSettled: () => {
      queryClient.invalidateQueries(["shopProductComment", id, accessToken]);
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
    <BackgroundWrapper onClick={() => handleCommentModal(false)}>
      <CommentModalWrapper onClick={(e) => e.stopPropagation()}>
        <Wrapper>
          <FeedCommentHeader>
            <CloseIcon
              onClick={() => handleCommentModal(false)}
              sx={{
                width: "24px",
                height: "24px",
                mr: "7px",
                cursor: "pointer",
              }}
            />
            <FeedCommentHeaderTitle>후기</FeedCommentHeaderTitle>
          </FeedCommentHeader>
          <FeedComment>
            <ProfileWrapper>
              <Profile
                alt="product-profile"
                src={product?.productimage_urls[0]}
              />
            </ProfileWrapper>
            <ContentWrapper>
              <ContentHeader>
                <p style={{ fontSize: "14px", margin: "0" }}>
                  <strong>{product?.eng_name}</strong>
                </p>
              </ContentHeader>
              <Date>{product?.kor_name}</Date>
            </ContentWrapper>
          </FeedComment>
          <FeedCommentInputWrapper>
            <FeedCommentInput
              onChange={handleComment}
              value={content}
              placeholder="후기를 입력하세요"
            />
            {content.length > 0 ? (
              <FeedCommentInputButton onClick={handleCommentButtonClick}>
                등록
              </FeedCommentInputButton>
            ) : null}
          </FeedCommentInputWrapper>
          <FeedCommentWrapper>
            {data?.results.map((comment, i) => (
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

export default ShopProductCommentModal;
