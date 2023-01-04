import { useState } from "react";
import { styleFeedExample } from "../../data/styleFeedExample";
import { StyleFeed } from "../../types/styleFeed";
import StyleFeedDetailHeader from "../style-feed-detail-header";
import StyleFeedImages from "../style-feed-images";
import {
  FeedImageWrapper,
  FeedWrapper,
  Wrapper,
} from "./style-feed-details.styled";

const StyleFeedDetails = () => {
  const defaultStyleFeeds: StyleFeed[] = styleFeedExample;
  const [styleFeeds, setStyleFeeds] = useState(defaultStyleFeeds);
  return (
    <Wrapper>
      {styleFeeds.map((feed) => (
        <FeedWrapper key={feed.id}>
          <StyleFeedDetailHeader
            profile={feed.profile}
            nickname={feed.nickname}
          />
          <FeedImageWrapper>
            <StyleFeedImages images={feed.images} />
          </FeedImageWrapper>
        </FeedWrapper>
      ))}
    </Wrapper>
  );
};

export default StyleFeedDetails;
