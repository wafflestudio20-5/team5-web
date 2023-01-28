import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../libs/urls";
import { styleFeedExample } from "../../../data/styleFeedExample";
import { StyleFeed } from "../../../types/styleFeed";
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
  const [styleFeeds, setStyleFeeds] = useState([]);

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -110;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "auto" });
  };

  useEffect(() => {
    const stylefeed = async () => {
      try {
        const res = await axios.get(`${API_URL}/styles/posts/`, {
          params: { type: "latest" },
        });
        console.log(res);
        return res;
      } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
          console.log(e.response?.data.message);
        }
        return null;
      }
    };
    stylefeed();
  }, []);

  return (
    <Wrapper>
      {/* <MasonryWrapper>
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
      </MasonryWrapper> */}
    </Wrapper>
  );
};

export default StyleFeedOverview;
