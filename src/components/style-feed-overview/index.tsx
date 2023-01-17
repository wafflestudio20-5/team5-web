import { useState } from "react";
import { styleFeedExample } from "../../data/styleFeedExample";
import { StyleFeed } from "../../types/styleFeed";
import StyleFeedDetail from "../style-feed-detail";
import StyleFeedThumbnail from "../style-feed-thumbnail";
import {
  FeedDetail,
  FeedImg,
  FeedWrapper,
  MasonryWrapper,
  Wrapper,
} from "./style-feed-overview.styled";

const StyleFeedOverview = () => {
  const defaultStyleFeeds: StyleFeed[] = styleFeedExample;
  const [styleFeeds, setStyleFeeds] = useState(defaultStyleFeeds);
  return (
    <Wrapper>
      <MasonryWrapper>
        {styleFeeds.map((feed) => (
          <FeedWrapper key={feed.id}>
            <FeedImg>
              <StyleFeedThumbnail thumbnail={feed.thumbnail} />
            </FeedImg>
            <FeedDetail>
              <StyleFeedDetail
                profile={feed.profile}
                nickname={feed.nickname}
                content={feed.content}
              />
            </FeedDetail>
          </FeedWrapper>
        ))}
      </MasonryWrapper>
    </Wrapper>
  );
};

export default StyleFeedOverview;
