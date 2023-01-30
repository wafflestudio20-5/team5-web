import { useState } from "react";

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
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { fetchStyleFeed } from "../../../api/style";
import CircularProgress from "@mui/material/CircularProgress";

interface FetchedData {
  previous?: string;
  next?: string;
  results: StyleFeed[];
}

const StyleFeedDetails = () => {
  const { data, isLoading } = useQuery<FetchedData, AxiosError>({
    queryKey: ["stylefeeds"],
    queryFn: fetchStyleFeed,
  });

  const [follow, setFollow] = useState(false);

  return (
    <Wrapper>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          {data?.results.map((feed) => (
            <FeedWrapper key={feed.id} id={feed.id.toString()}>
              <StyleFeedDetailHeader
                uimage={feed.created_by.image}
                nickname={feed.created_by.user_name}
                created={feed.created_at}
                followed={feed.created_by.following}
              />
              <FeedImageWrapper>
                <StyleFeedImages images={feed.images} />
              </FeedImageWrapper>
              <FeedItemTagWrapper>
                <FeedItemTagInfo>
                  상품 태그 <strong>2</strong>개
                </FeedItemTagInfo>
              </FeedItemTagWrapper>
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
