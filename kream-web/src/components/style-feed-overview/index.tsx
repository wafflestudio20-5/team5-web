import { useState } from "react";
import { styleFeedExample } from "../../data/styleFeedExample";
import { StyleFeed } from "../../types/styleFeed";
import StyleFeedContent from "../style-feed-content";
import StyleFeedThumbnail from "../style-feed-thumbnail";
import {
  FeedContent,
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
              <StyleFeedThumbnail thumbnail={feed.images[0]} />
            </FeedImg>
            <FeedContent>
              <StyleFeedContent
                profile={feed.profile}
                nickname={feed.nickname}
                content={feed.content}
              />
            </FeedContent>
          </FeedWrapper>
        ))}
      </MasonryWrapper>
    </Wrapper>
  );
};

export default StyleFeedOverview;
