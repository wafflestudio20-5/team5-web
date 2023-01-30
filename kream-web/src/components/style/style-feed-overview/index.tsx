import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../libs/urls";

import { StyleFeed } from "../../../types/style";
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
import { useQuery } from "@tanstack/react-query";
import { fetchStyleFeed } from "../../../api/style";
import CircularProgress from "@mui/material/CircularProgress";
import { scrollWithOffset } from "../../../utils/HashLink";

interface FetchedData {
  previous?: string;
  next?: string;
  results: StyleFeed[];
}

const StyleFeedOverview = () => {
  const { data, isLoading } = useQuery<FetchedData, AxiosError>({
    queryKey: ["stylefeeds"],
    queryFn: fetchStyleFeed,
  });

  console.log(data);

  return (
    <Wrapper>
      <MasonryWrapper>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <div>
            {data?.results.map((feed) => (
              <FeedWrapper key={feed.id}>
                <StyledHashLink
                  to={`/style/details#${feed.id}`}
                  scroll={(el) => scrollWithOffset(el)}
                >
                  <FeedImg>
                    <StyleFeedThumbnail thumbnail={feed.images[0]} />
                  </FeedImg>
                </StyledHashLink>

                <FeedContent>
                  <StyleFeedContent
                    id={feed.id}
                    uid={feed.created_by.user_id}
                    uimage={feed.created_by.image}
                    nickname={feed.created_by.user_name}
                    content={feed.content}
                    likes={feed.num_likes}
                  />
                </FeedContent>
              </FeedWrapper>
            ))}
          </div>
        )}
      </MasonryWrapper>
    </Wrapper>
  );
};

export default StyleFeedOverview;
