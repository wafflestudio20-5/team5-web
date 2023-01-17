import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styleFeedExample } from "../../data/styleFeedExample";
import { StyleFeed } from "../../types/styleFeed";
import StyleFeedContent from "../style-feed-content";
import StyleFeedThumbnail from "../style-feed-thumbnail";
import {
  FeedContent,
  FeedImg,
  FeedWrapper,
  MasonryWrapper,
  StyledHashLink,
  Wrapper,
} from "./style-feed-overview.styled";

const StyleFeedOverview = () => {
  const defaultStyleFeeds: StyleFeed[] = styleFeedExample;
  const [styleFeeds, setStyleFeeds] = useState(defaultStyleFeeds);

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -110;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "auto" });
  };

  return (
    <Wrapper>
      <MasonryWrapper>
        {styleFeeds.map((feed) => (
          <StyledHashLink
            key={feed.id}
            to={`/style/details#${feed.id}`}
            scroll={(el) => scrollWithOffset(el)}
          >
            <FeedWrapper>
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
          </StyledHashLink>
        ))}
      </MasonryWrapper>
    </Wrapper>
  );
};

export default StyleFeedOverview;
