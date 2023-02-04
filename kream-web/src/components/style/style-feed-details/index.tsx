import { useEffect, useMemo, useState } from "react";

import { StyleFeed } from "../../../types/style";
import StyleFeedDetailHeader from "../style-feed-detail-header";
import StyleFeedImages from "../style-feed-images";
import {
  FeedCommentInfo,
  FeedCommentWrapper,
  FeedContentIcon,
  FeedContentIconWrapper,
  FeedContentTextWrapper,
  FeedContentWrapper,
  FeedImageWrapper,
  FeedLikesInfo,
  FeedWrapper,
  MoreCommentButton,
  Wrapper,
} from "./style-feed-details.styled";

import SmileIcon from "../../../assets/smile-icon.svg";
import FollowedIcon from "../../../assets/followed-icon.svg";
import CommentIcon from "../../../assets/comment-icon.svg";

import StyleFeedDetailContent from "../style-feed-detail-content";
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { fetchAllStyleFeed, like } from "../../../api/style";
import CircularProgress from "@mui/material/CircularProgress";
import { useAppSelector } from "../../../store/hooks";
import { useIntersect } from "../../../hooks/useIntersect";
import { useNavigate } from "react-router-dom";
import StyleFeedCommentModal from "../style-feed-comment";

interface FetchedData {
  previous?: string;
  next: string;
  results: StyleFeed[];
}

const StyleFeedDetails = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { accessToken } = useAppSelector((state) => state.session);
  const { data, hasNextPage, isFetching, fetchNextPage } = useInfiniteQuery<
    FetchedData,
    AxiosError
  >(
    ["allStyleFeeds", accessToken],
    ({ pageParam = "" }) => fetchAllStyleFeed({ pageParam, accessToken }),
    {
      getNextPageParam: ({ next }) =>
        next?.length > 0
          ? next.split("cursor")[1].split("&")[0].slice(1)
          : undefined,
      staleTime: 5000,
    }
  );

  const feeds = useMemo(
    () => (data ? data.pages.flatMap((data) => data.results) : []),
    [data]
  );

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  const { mutate } = useMutation({
    mutationFn: (pid: number) => like({ pid, accessToken }),
    onSettled: () => {
      queryClient.invalidateQueries(["allStyleFeeds", accessToken]);
    },
  });

  const [comment, setComment] = useState(0);

  const handleLike = (pid: number) => {
    if (!accessToken) {
      navigate("/login");
    } else {
      mutate(pid);
    }
  };

  const openComment = (pid: number) => {
    if (!accessToken) {
      navigate("/login");
    } else {
      setComment(pid);
    }
  };

  useEffect(() => {
    if (comment !== 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }
  }, [comment]);
  return (
    <Wrapper>
      {feeds.map((feed) => (
        <FeedWrapper key={feed.id} id={feed.id.toString()}>
          <StyleFeedDetailHeader
            uid={feed.created_by.user_id}
            uimage={feed.created_by.image}
            nickname={feed.created_by.user_name}
            created={feed.created_at}
            followed={feed.created_by.following}
          />
          <FeedImageWrapper>
            <StyleFeedImages images={feed.images} />
          </FeedImageWrapper>
          <FeedContentWrapper>
            <FeedContentIconWrapper>
              {!feed.liked ? (
                <FeedContentIcon
                  onClick={() => handleLike(feed.id)}
                  alt="smile-icon"
                  src={SmileIcon}
                />
              ) : (
                <FeedContentIcon
                  onClick={() => handleLike(feed.id)}
                  alt="followed-icon"
                  src={FollowedIcon}
                />
              )}
              <FeedContentIcon
                onClick={() => openComment(feed.id)}
                alt="comment-icon"
                src={CommentIcon}
              />
            </FeedContentIconWrapper>
            <FeedLikesInfo>
              공감 <strong>{feed.num_likes}</strong>개
            </FeedLikesInfo>
            <FeedContentTextWrapper>
              <StyleFeedDetailContent content={feed.content} />
            </FeedContentTextWrapper>
            {feed.num_comments > 0 ? (
              <FeedCommentWrapper>
                <FeedCommentInfo>
                  댓글 <strong>{feed.num_comments}</strong>개
                </FeedCommentInfo>
                <MoreCommentButton onClick={() => openComment(feed.id)}>
                  댓글 확인하기
                </MoreCommentButton>
              </FeedCommentWrapper>
            ) : null}
          </FeedContentWrapper>
        </FeedWrapper>
      ))}
      {isFetching && hasNextPage && <CircularProgress />}
      <div style={{ height: "1px" }} ref={ref}></div>
      {comment !== 0 ? (
        <StyleFeedCommentModal
          id={comment}
          feed={feeds.find((feed) => feed.id === comment) as StyleFeed}
          handleCommentModal={setComment}
        />
      ) : null}
    </Wrapper>
  );
};

export default StyleFeedDetails;
