import { useMemo, useState } from "react";

import { StyleFeed } from "../../../types/style";
import StyleFeedDetailHeader from "../style-feed-detail-header";
import StyleFeedImages from "../style-feed-images";
import {
  FeedCommentInfo,
  FeedCommentWrapper,
  FeedContentIconWrapper,
  FeedContentTextWrapper,
  FeedContentWrapper,
  FeedImageWrapper,
  FeedItemTagInfo,
  FeedItemTagWrapper,
  FeedLikesInfo,
  FeedWrapper,
  Wrapper,
} from "./style-feed-details.styled";

import SmileIcon from "../../../assets/smile-icon.svg";
import CommentIcon from "../../../assets/comment-icon.svg";
import FollowedIcon from "../../../assets/followed-icon.svg";

import StyleFeedDetailContent from "../style-feed-detail-content";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { fetchAllStyleFeed } from "../../../api/style";
import CircularProgress from "@mui/material/CircularProgress";
import { useAppSelector } from "../../../store/hooks";
import { useIntersect } from "../../../hooks/useIntersect";
import StyleFeedCommentOverview from "../style-feed-comment-overview";

interface FetchedData {
  previous?: string;
  next?: string;
  results: StyleFeed[];
}

const StyleFeedDetails = () => {
  const { accessToken } = useAppSelector((state) => state.session);
  const { data, hasNextPage, isFetching, fetchNextPage } = useInfiniteQuery<
    FetchedData,
    AxiosError
  >(
    ["allStyleFeeds", accessToken],
    ({ pageParam = "" }) => fetchAllStyleFeed({ pageParam, accessToken }),
    {
      getNextPageParam: ({ next }) =>
        next
          ? next.length > 0
            ? next.split("cursor")[1].split("&")[0].slice(1)
            : undefined
          : undefined,
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

  const [follow, setFollow] = useState(false);

  return (
    <Wrapper>
      {isFetching ? (
        <CircularProgress />
      ) : (
        <div>
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
                  {!follow ? (
                    <img
                      onClick={() => setFollow((prev) => !prev)}
                      alt="smile-icon"
                      style={{ width: "32px", height: "32px" }}
                      src={SmileIcon}
                    />
                  ) : (
                    <img
                      onClick={() => setFollow((prev) => !prev)}
                      alt="followed-icon"
                      style={{ width: "32px", height: "32px" }}
                      src={FollowedIcon}
                    />
                  )}
                  <img
                    alt="comment-icon"
                    style={{ width: "32px", height: "32px" }}
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
                    <StyleFeedCommentOverview id={feed.id} />
                  </FeedCommentWrapper>
                ) : null}
              </FeedContentWrapper>
            </FeedWrapper>
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default StyleFeedDetails;
