import { useState } from "react";
import { styleFeedExample } from "../../data/styleFeedExample";
import { StyleFeed } from "../../types/styleFeed";
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

import SmileIcon from "../../assets/smile-icon.svg";
import CommentIcon from "../../assets/comment-icon.svg";
import FollowedIcon from "../../assets/followed-icon.svg";

import StyleFeedDetailContent from "../style-feed-detail-content";

const StyleFeedDetails = () => {
  const defaultStyleFeeds: StyleFeed[] = styleFeedExample;
  const [styleFeeds, setStyleFeeds] = useState(defaultStyleFeeds);
  const [follow, setFollow] = useState(false);

  return (
    <Wrapper>
      {styleFeeds.map((feed) => (
        <FeedWrapper key={feed.id} id={feed.id.toString()}>
          <StyleFeedDetailHeader
            profile={feed.profile}
            nickname={feed.nickname}
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
              공감 <strong>10</strong>개
            </FeedLikesInfo>
            <FeedContentTextWrapper>
              <StyleFeedDetailContent content={feed.content} />
            </FeedContentTextWrapper>
            <FeedCommentWrapper>
              <FeedCommentInfo>
                댓글 <strong>1</strong>개
              </FeedCommentInfo>
            </FeedCommentWrapper>
          </FeedContentWrapper>
        </FeedWrapper>
      ))}
    </Wrapper>
  );
};

export default StyleFeedDetails;
